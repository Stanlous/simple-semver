[![Build Status](https://travis-ci.org/Stanlous/simple-semver.svg?branch=master)](https://travis-ci.org/Stanlous/simple-semver)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/Stanlous/simple-semver?branch=master&svg=true)](https://ci.appveyor.com/project/Stanlous/simple-semver)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/simple-semver.svg)](http://badge.fury.io/js/simple-semver)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/simple-semver.svg)](https://www.npmjs.org/package/simple-semver)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/Stanlous/simple-semver.svg)](https://david-dm.org/Stanlous/simple-semver)
-->

# simple-semver

<!-- description -->

## Install

```sh
$ npm install simple-semver --save
```

## Usage

```js
const simpleSemver = require('simple-semver')

simpleSemver.validate('1.3.0') // true
simpleSemver.validate('a.b.0') // false
simpleSemver.validate('1.0')   // false
// simple-semver only support xx.xx.xx(only contain Number and dot(.)) temporarily

simpleSemver.gt('1.3.0', '1.1.0') // true (gt means greater than)
simpleSemver.lt('1.1.0', '1.5.0') // true (lt means less than)

simpleSemver.gte('1.3.0', '1.1.0') // true (gte means greater than or equal)
simpleSemver.gte('1.3.0', '1.3.0') // true 
simpleSemver.gte('1.1.0', '1.3.0') // false

simpleSemver.lte('1.1.0', '1.3.0') // true (lte means less than or equal)
simpleSemver.lte('1.3.0', '1.3.0') // true 
simpleSemver.lte('1.3.0', '1.1.0') // false

simpleSemver.lt('1.1.0-alpha', '1.5.0') // true ('-alpha' will be ignore)

```

## Test

```sh
$ npm run test
```

## License

MIT
