## use-open-window

[![npm](https://img.shields.io/npm/l/hooked-react-stopwatch.svg)](https://www.npmjs.com/package/use-open-window)
[![npm](https://img.shields.io/bundlephobia/min/use-open-window)](https://www.npmjs.com/package/use-open-window)
[![Coverage Status](https://coveralls.io/repos/github/bartlomiejzuber/use-open-window/badge.svg)](https://coveralls.io/github/bartlomiejzuber/use-open-window)
[![Build Status](https://travis-ci.org/bartlomiejzuber/use-open-window.svg?branch=master)](https://travis-ci.org/bartlomiejzuber/use-open-window)
[![License](https://img.shields.io/npm/v/use-open-window.svg)](https://github.com/bartlomiejzuber/use-open-window/blob/master/LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/687ea567-73f1-43ad-98c8-18c33994a609/deploy-status)](https://app.netlify.com/sites/hooked-react-stopwatch/deploys)
<p align="center">
  <img src="https://github.com/Bajtas/bjts-react-stopwatch/blob/master/images/stopwatch.jpg?raw=true" alt="How component looks"/>
</p>

Useful & super tiny (:heart:obvious dep on React only) hook to open links in new window.

[DEMO](https://hooked-react-stopwatch.netlify.com/)


## Installation

```sh
npm i use-open-window --save
```

Alternatively you may use `yarn`:

```sh
yarn add use-open-window
```

Link to npm:
[https://www.npmjs.com/package/use-open-window](https://www.npmjs.com/package/use-open-window)

## Usage

```javascript
import React from 'react';
import { useOpenInWindow }  from 'use-open-window';

const url = 'https://www.google.com/';
const options = {
   centered: true, /* default */
   spec: {
      width: 800, /* window width */
      height: 600, /* window height */
   }
};
const App = () => {
  const [handleWindowOpen, newWindowHandle] = useOpenInWindow(url);
  
  return (
    <div className="App">
      <div onClick={handleWindowOpen}>Click me</div>
    </div>
  );
}

export default App;
```

### Hook params

| Parameter | Type                   | Description                                             | Required |
|-----------|------------------------|---------------------------------------------------------|----------|
| url       | string                 | Url to load inside new window                           | Y        |
| options   | UseOpenInWindowOptions | Set of hook options (centered, focus, window size etc.) | N        |

```typescript
 url: string
 options: UseOpenInWindowOptions
```

License:
--------

Made with :sparkling_heart: by [Bartlomiej Zuber (bartlomiej.zuber@outlook.com)](mailto:bartlomiej.zuber@outlook.com) while traveling around the world, and licensed under the [MIT License](LICENSE)
