# invoke-once

> Restrict the given function only be invoked once. Repeat calls to the function return the value of the first invocation.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/gearcase/invoke-once/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/gearcase/invoke-once/master.svg?style=flat-square)](https://travis-ci.org/gearcase/invoke-once)
[![coverage:?](https://img.shields.io/coveralls/gearcase/invoke-once/master.svg?style=flat-square)](https://coveralls.io/github/gearcase/invoke-once)


## Install

```
$ npm install --save invoke-once 
```

## Usage

> For more use-cases see the [tests](https://github.com/gearcase/invoke-once/blob/master/test/spec/index.js)

```js

var invokeOnce = require('invoke-once');

var c  = 0;
var fn = invokeOnce(function () {
  return ++c;
});

fn(); // => 1
fn(); // => 1
fn(); // => 1
```

## Related

- [invoke-fn](https://github.com/gearcase/invoke-fn) - A faster alternative to `Function#apply`.
- [invoke-before](https://github.com/gearcase/invoke-before) - Returns a function that will only be executed before being called N times.
- [invoke-after](https://github.com/gearcase/invoke-after) - Returns a function that will only be executed after being called N times.
- [try-invoke](https://github.com/gearcase/try-invoke) - Attempts to invoke the given function, returning either the result or the caught error object.
- [is-native](https://github.com/gearcase/is-native) - Checks if the given value is a native function.
- [to-source-code](https://github.com/gearcase/to-source-code.git) - Converts function to its source code.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/gearcase/invoke-once/issues/new).
