# Flow Typedef · [![npm version](https://badge.fury.io/js/flow-typedef.svg)](https://badge.fury.io/js/flow-typedef) [![CircleCI](https://circleci.com/gh/ryota-murakami/flow-typedef.svg?style=svg)](https://circleci.com/gh/ryota-murakami/flow-typedef) [![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

<p align="center">
<img src="https://raw.githubusercontent.com/ryota-murakami/flow-typedef/master/img/Screen%20Shot%202018-10-10%20at%200.05.17.png" height="300"/>

<img src="https://raw.githubusercontent.com/ryota-murakami/flow-typedef/master/img/Screen%20Shot%202018-10-10%20at%200.00.45.png" height="300" />

<img src="https://raw.githubusercontent.com/ryota-murakami/flow-typedef/master/img/Screen%20Shot%202018-10-10%20at%200.01.01.png" height="300" />
<p/>

> **get Flow built-in type definition files.**

## Why
Flow Buit-in type definition files are hosted [facebook/flow](https://github.com/facebook/flow/tree/master/lib).  
If you would like to get those files some reason, [you have to manual copy](https://github.com/facebook/flow/issues/922#issuecomment-146940723).  

## Getting Started
I Assume you have experience of [flow-typed](https://github.com/flow-typed/flow-typed). Otherwise you might be start from [flow-typed](https://github.com/flow-typed/flow-typed).  

## Install
**recommend global install**
```
$ yarn global add flow-typedef
```

## Usage
In the same directory as `package.json` that `flow-bin` installed(almost where is project root),
execute `flow-typedef` command. Then typedef files will be generated under the `flow-typed/built-in`.
```
# cd your-project-dir
$ flow-typedef
```

`flow-typedef` detect your flow-bin version and get same version typedef files.

And more, I reccomend following setting.

```js
// .flowconfig

[ignore]

[include]

[libs]

[lints]

[options]
no_flowlib=true

[strict]

```

Because Flow built in lib def already there in your `/flow-typed`.  
see option detail https://flow.org/en/docs/config/options/#toc-no-flowlib-boolean

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/5501268?s=400&u=7bf6b1580b95930980af2588ef0057f3e9ec1ff8&v=4" width="100px;"/><br /><sub><b>ryota-murakami</b></sub>](http://ryota-murakami.github.io/)<br />[💻](https://github.com/ryota-murakami/flow-typedef/ryota-murakami/flow-typedef/commits?author=ryota-murakami "Code") [📖](https://github.com/ryota-murakami/flow-typedef/ryota-murakami/flow-typedef/commits?author=ryota-murakami "Documentation") [⚠️](https://github.com/ryota-murakami/flow-typedef/ryota-murakami/flow-typedef/commits?author=ryota-murakami "Tests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
