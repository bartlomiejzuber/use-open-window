## use-open-window

[![npm](https://img.shields.io/npm/l/hooked-react-stopwatch.svg)](https://www.npmjs.com/package/use-open-window)
[![npm](https://img.shields.io/bundlephobia/min/use-open-window)](https://www.npmjs.com/package/use-open-window)
[![Coverage Status](https://coveralls.io/repos/github/bartlomiejzuber/use-open-window/badge.svg)](https://coveralls.io/github/bartlomiejzuber/use-open-window)
[![Build Status](https://travis-ci.org/bartlomiejzuber/use-open-window.svg?branch=master)](https://travis-ci.org/bartlomiejzuber/use-open-window)
[![License](https://img.shields.io/npm/v/use-open-window.svg)](https://github.com/bartlomiejzuber/use-open-window/blob/master/LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/687ea567-73f1-43ad-98c8-18c33994a609/deploy-status)](https://app.netlify.com/sites/hooked-react-stopwatch/deploys)
<p align="center">
  <img src="https://github.com/bartlomiejzuber/use-open-window/blob/master/assets/icon.png" alt="hook icon"/>
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

#### Options

| Option       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Default   |
|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| name         | Specifies the target attribute or the name of the window. The following values are supported:<br><br>        _blank - URL is loaded into a new window, or tab.<br><br>        _parent - URL is loaded into the parent frame<br><br>        _self - URL replaces the current page<br><br>        _top - URL replaces any framesets that may be loaded<br><br>        name - The name of the window (Note: the name does not specify the title of the new window) | _blank    |
| centered     | Specifies if window should be centered                                                                                                                                                                                                                                                                                                                                                                                                                          | true      |
| focus        | Puts new window in focus                                                                                                                                                                                                                                                                                                                                                                                                                                        | true      |
| specs.width  | The height of the window. Min. value is 100 (browser restriction).                                                                                                                                                                                                                                                                                                                                                                                              | 800       |
| specs.height | The width of the window. Min. value is 100 (browser restriction).                                                                                                                                                                                                                                                                                                                                                                                               | 800       |
| left         | The left position of the window. Negative values not allowed.                                                                                                                                                                                                                                                                                                                                                                                                   | undefined |
| top          | The top position of the window. Negative values not allowed.                                                                                                                                                                                                                                                                                                                                                                                                    | undefined |
| channelmode  | Whether or not to display the window in theater mode. IE only                                                                                                                                                                                                                                                                                                                                                                                                   | 'no'      |
| fullscreen   | Whether or not to display the browser in full-screen mode. A window in full-screen mode must also be in theater mode. IE only.                                                                                                                                                                                                                                                                                                                                  | 'no'      |
| location     | Whether or not to display the address field. Opera only.                                                                                                                                                                                                                                                                                                                                                                                                        | null      |
| menubar      | Whether or not to display the menu bar.                                                                                                                                                                                                                                                                                                                                                                                                                         | null      |
| resizable    | Whether or not the window is resizable. IE only.                                                                                                                                                                                                                                                                                                                                                                                                                | null      |
| scrollbars   | Whether or not to display scroll bars. IE, Firefox & Opera only.                                                                                                                                                                                                                                                                                                                                                                                                | null      |
| status       | Whether or not to add a status bar                                                                                                                                                                                                                                                                                                                                                                                                                              | null      |
| titlebar     | Whether or not to display the title bar. Ignored unless the calling application is an HTML Application or a trusted dialog box.                                                                                                                                                                                                                                                                                                                                 | null      |
| toolbar      | Whether or not to display the browser toolbar. IE and Firefox only.                                                                                                                                                                                                                                                                                                                                                                                             | null      |

License:
--------

Made with :sparkling_heart: by [Bartlomiej Zuber (bartlomiej.zuber@outlook.com)](mailto:bartlomiej.zuber@outlook.com) while traveling around the world, and licensed under the [MIT License](LICENSE)
