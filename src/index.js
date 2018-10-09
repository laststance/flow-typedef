#!/usr/bin/env node

var chalk = require('chalk')
var exec = require('child_process').exec
var execSync = require('child_process').execSync

// => get 'flow-bin' version
exec('yarn why flow-bin', { stdio: [0, 1, 2] }, (error, stdout, stderr) => {
  if (error) {
    console.error(chalk.bgRed.bold(`exec error: ${error}`))
    process.exit(1)
  }
  if (stderr) console.log(chalk.bgRed.bold(`stderr: ${stderr}`))

  // => Found "flow-bin@0.xx.0" from "yarn why flow-bin" output string
  if (stdout) {
    const cap = stdout.match(/flow-bin@[0-9]\.[0-9]{2,}\.[0-9]/)
    if (cap === null) {
      console.error(
        chalk.bgRed.bold(
          'flow-bin not found. please make sure current directory is same as package.json or flow-bin installed correctly.'
        )
      )
      process.exit(1)
    }
    // extract "0.xx.0" from "flow-bin@0.xx.0"
    const semver = cap[0].split('@')[1]

    // => git clone flow@0.xx.0
    execSync(`git clone --branch v${semver} git@github.com:facebook/flow.git`, {
      stdio: [0, 1, 2]
    })

    // => create flow-typed/build-in directory
    execSync('mkdir -p flow-typed/built-in', { stdio: [0, 1, 2] })

    // => copy raw typedef files flow pore to my repo
    execSync('cp flow/lib/* flow-typed/built-in', { stdio: [0, 1, 2] })
    execSync('rm -rf flow', { stdio: [0, 1, 2] })

    console.log(
      chalk.green.bold('\n\nInstalled Flow built-in type definition!\n')
    )
  }
})
