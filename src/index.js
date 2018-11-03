#!/usr/bin/env node

const cli = require(`yargs`)
var chalk = require('chalk')
var exec = require('child_process').exec
var execSync = require('child_process').execSync

cli
  .usage(`Usage: $0`)
  .alias(`h`, `help`)
  .alias(`v`, `version`)
  .help().argv

// get 'flow-bin' version
exec('yarn why flow-bin', { stdio: [0, 1, 2] }, (error, stdout) => {
  if (error) {
    console.error(chalk.bgRed.bold(`exec error: ${error}`))
    process.exit(1)
  }

  // Extract "flow-bin@0.xx.0" from "yarn why flow-bin" output string
  if (stdout) {
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

    // git clone flow@0.xx.0
    execSync(`git clone --branch v${semver} git@github.com:facebook/flow.git`, {
      stdio: [0, 1, 2]
    })

    // Create flow-typed/build-in directory
    execSync('mkdir -p flow-typed/built-in', { stdio: [0, 1, 2] })

    // Copy raw typedef files flow repo to my repo
    execSync('cp flow/lib/* flow-typed/built-in', { stdio: [0, 1, 2] })
    execSync('rm -rf flow', { stdio: [0, 1, 2] })

    // Copy UtilityTypes
    execSync(`cp ${__dirname}/UtilityTypes.js flow-typed/UtilityTypes.js`, {
      stdio: [0, 1, 2]
    })

    console.log(
      chalk.green.bold('\n\nInstalled Flow built-in type definition!\n')
    )
    process.exit(0)
  }
})
