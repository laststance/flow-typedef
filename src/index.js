#!/usr/bin/env node

const fs = require('fs')
const cli = require(`yargs`)
const chalk = require('chalk')
const exec = require('child_process').exec
const execSync = require('child_process').execSync

cli
  .usage(`Usage: $0`)
  .alias(`h`, `help`)
  .alias(`v`, `version`)
  .help().argv

// Confirm whether installed 'flow-bin' and get version info
exec('yarn why flow-bin', { stdio: [0, 1, 2] }, (error, stdout) => {
  if (error) {
    console.error(chalk.bgRed.bold(`exec error: ${error}`))
    process.exit(1)
  }

  /**
   * Prepare Flow repository
   */

  const isFlowExists = fs.existsSync(__dirname + '/flow')
  if (isFlowExists) {
    execSync(`cd ${__dirname} && git pull origin master`, {
      stdio: [0, 1, 2]
    })
  } else {
    execSync(`cd ${__dirname} && git clone git@github.com:facebook/flow.git`, {
      stdio: [0, 1, 2]
    })
  }

  /**
   * Specify installed Flow version
   */

  // Extract "flow-bin@0.xx.0" from "yarn why flow-bin" output string
  const cap = stdout.match(/flow-bin@[0-9]\.[0-9]{2,}\.[0-9]/)
  if (cap === null) {
    console.error(
      chalk.red(
        '\nflow-bin not found in package.json. please try "yarn add -D flow-bin".\n'
      )
    )
    process.exit(1)
  }

  // Extract "0.xx.0" from "flow-bin@0.xx.0"
  const semver = cap[0].split('@')[1]

  // Make same semver repository
  execSync(`cd ${__dirname}/flow && git checkout v${semver}`, {
    stdio: [0, 1, 2]
  })

  /**
   * Put Flow built-in type definition files
   */

  // Create flow-typed/build-in directory
  execSync('mkdir -p flow-typed/built-in', { stdio: [0, 1, 2] })

  // Copy raw typedef files flow repo to my repo
  execSync(`cp ${__dirname}/flow/lib/* flow-typed/built-in`, {
    stdio: [0, 1, 2]
  })

  // Copy UtilityTypes
  execSync(`cp ${__dirname}/UtilityTypes.js flow-typed/UtilityTypes.js`, {
    stdio: [0, 1, 2]
  })

  /**
   * Finish
   */

  // Return from detached HEAD
  execSync(`cd ${__dirname}/flow && git checkout master`, {
    stdio: [0, 1, 2]
  })

  console.log(
    chalk.green.bold('\n\nInstalled Flow built-in type definition!\n')
  )

  process.exit(0)
})
