# React Buffet

<img src="/logo/react-buffet-logo.svg" height="120"/>

Collection of reusable React.js components.

[![travis build](https://img.shields.io/travis/Temzasse/react-buffet.svg)](https://travis-ci.org/Temzasse/react-buffet)
<!-- [![codecov coverage](https://img.shields.io/codecov/c/github/Temzasse/react-buffet.svg)](https://codecov.io/gh/Temzasse/react-buffet) -->
[![version](https://img.shields.io/npm/v/react-buffet.svg)](https://www.npmjs.com/package/react-buffet)
[![MIT License](https://img.shields.io/npm/l/react-buffet.svg)](https://opensource.org/licenses/MIT)

## Live demo
Check out the demo and documentation website: [https://temzasse.github.io/react-buffet/](https://temzasse.github.io/react-buffet/)

You can also test the components locally by cloning this repo and doing the following steps:

```
$ cd docs
$ npm install
$ npm start
```

And then open [localhost:3000](localhost:3000) in a browser.

## Installation

Install with npm:

```
$ npm install --save react-buffet
```

The UMD build of react-buffet is available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/react-buffet@0.1.0/umd/react-buffet.min.js"></script>
```

## Usage

```js
import React from 'react';

// Import some components
import { Tooltip, LineSpinner } from 'react-buffet';

const Example = () => {
  return (
    <Tooltip content="Hello World" />
    <LineSpinner color="tomato" />
  );
}
```

Check the docs for more detailed usage examples: [https://temzasse.github.io/react-buffet/](https://temzasse.github.io/react-buffet/)

The buffet is served! Enjoy your reusable React components :wink:
