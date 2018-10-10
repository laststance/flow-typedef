# flow-typedef  [![npm version](https://badge.fury.io/js/flow-typedef.svg)](https://badge.fury.io/js/flow-typedef) [![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors)

<p align="center">
<img src="https://raw.githubusercontent.com/ryota-murakami/flow-typedef/master/img/Screen%20Shot%202018-10-10%20at%200.05.17.png" height="300"/>

<img src="https://raw.githubusercontent.com/ryota-murakami/flow-typedef/master/img/Screen%20Shot%202018-10-10%20at%200.00.45.png" height="300" />

<img src="https://raw.githubusercontent.com/ryota-murakami/flow-typedef/master/img/Screen%20Shot%202018-10-10%20at%200.01.01.png" height="300" />
<p/>

> **get Flow built-in type definition files.**

## Why
Flow Buit-in type definition files are hosted [facebook/flow](https://github.com/facebook/flow/tree/master/lib).  
If you would like to get those files some reason, [you have to manual copy](https://github.com/facebook/flow/issues/922#issuecomment-146940723).  

## Install
recommend global install
```
$ yarn global add flow-typedef
```

## Usage
in the `flow-bin` installed project folder  
then typedef files generated at`flow-typed/built-in`
```
$ flow-typedef
```

`flow-typedef` detect your flow-bin version and get same version typedef files
## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!