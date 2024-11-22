## use-open-window

![react hook](https://badgen.net/badge/icon/react-hook?icon=libraries&label)
![fully typed](https://badgen.net/badge/icon/fully-typed?icon=typescript&label)
[![npm](https://img.shields.io/npm/l/hooked-react-stopwatch.svg)](https://www.npmjs.com/package/use-open-window)
[![npm](https://badgen.net/bundlephobia/minzip/use-open-window)](https://www.npmjs.com/package/use-open-window)
[![Coverage Status](https://coveralls.io/repos/github/bartlomiejzuber/use-open-window/badge.svg)](https://coveralls.io/github/bartlomiejzuber/use-open-window)
[![License](https://img.shields.io/npm/v/use-open-window.svg)](https://github.com/bartlomiejzuber/use-open-window/blob/master/LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/d360c27d-3707-4eb8-a0bd-b6e0d65a3e22/deploy-status)](https://app.netlify.com/sites/use-open-window-demo/deploys)
<p align="center">
  <img src="https://raw.githubusercontent.com/bartlomiejzuber/use-open-window/master/assets/icon.png" alt="hook icon"/>
</p>

Useful & super tiny (less than 1KB ✔️) (❤️obvious dep on React only) hook to open links in new window.

> **Note**: Version `^1.4.0` of this hook has dependency on `React 18`, if you wish to use it with `React 17` then please use version `^1.3.0`.

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

### Click here to see [DEMO](https://use-open-window-demo.netlify.app/)

### Demo

![Demo GIF](/assets/demo-gif.gif)

## Usage

- With URL and options passed to hook
  ```javascript
  import { useOpenInWindow }  from 'use-open-window';

  const url = 'https://www.google.com/';
  const options = {
    centered: true, /* default */
    security: {
      noopener: true,    /* default */
      noreferrer: true,  /* default */
      nofollow: false    /* default */
    },
    specs: {
      width: 800,  /* window width */
      height: 600, /* window height */
    }
  };
  const App = () => {
    const [handleWindowOpen, newWindowHandle] = useOpenInWindow(url, options);
    
    return (
      <div className="App">
        <div onClick={handleWindowOpen}>Click me</div>
      </div>
    );
  }

  export default App;
  ```
- With URL and options passed inside callback
  ```javascript
  import { useOpenInWindow }  from 'use-open-window';

  const options = {
    url: 'https://www.google.com/' /* url to page to open */
    centered: true, /* default */
    security: {
      noopener: true,    /* default */
      noreferrer: true,  /* default */
      nofollow: false    /* default */
    },
    specs: {
      width: 800,  /* window width */
      height: 600, /* window height */
    }
  };
  const App = () => {
    const [handleWindowOpen, newWindowHandle] = useOpenInWindow();
    
    return (
      <div className="App">
        <div onClick={(ev) => handleWindowOpen(ev, options)}>Click me</div>
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

| Option           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Default   |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| name             | Specifies the target attribute or the name of the window. The following values are supported:<br><br>        _blank - URL is loaded into a new window, or tab.<br><br>        _parent - URL is loaded into the parent frame<br><br>        _self - URL replaces the current page<br><br>        _top - URL replaces any framesets that may be loaded<br><br>        name - The name of the window (Note: the name does not specify the title of the new window) | _blank    |
| centered         | Specifies if window should be centered                                                                                                                                                                                                                                                                                                                                                                                                                          | true      |
| focus            | Puts new window in focus                                                                                                                                                                                                                                                                                                                                                                                                                                        | true      |
| security.noopener| Prevents the opened page from having access to the window.opener property                                                                                                                                                                                                                                                                                                                                                                                       | true      |
| security.noreferrer| Prevents passing the referrer information to the opened page                                                                                                                                                                                                                                                                                                                                                                                                  | true      |
| security.nofollow| Instructs search engines not to follow the link                                                                                                                                                                                                                                                                                                                                                                                                                | false     |
| specs.width      | The width of the window. Min. value is 100 (browser restriction).                                                                                                                                                                                                                                                                                                                                                                                               | 800       |
| specs.height     | The height of the window. Min. value is 100 (browser restriction).                                                                                                                                                                                                                                                                                                                                                                                              | 800       |
| left             | The left position of the window. Negative values not allowed.                                                                                                                                                                                                                                                                                                                                                                                                   | undefined |
| top              | The top position of the window. Negative values not allowed.                                                                                                                                                                                                                                                                                                                                                                                                    | undefined |
| location         | Whether or not to display the address field                                                                                                                                                                                                                                                                                                                                                                                                                     | null      |
| menubar          | Whether or not to display the menu bar                                                                                                                                                                                                                                                                                                                                                                                                                          | null      |
| scrollbars       | Whether or not to display scroll bars                                                                                                                                                                                                                                                                                                                                                                                                                           | yes       |
| status           | Whether or not to add a status bar                                                                                                                                                                                                                                                                                                                                                                                                                              | null      |
| titlebar         | Whether or not to display the title bar                                                                                                                                                                                                                                                                                                                                                                                                                         | null      |
| toolbar          | Whether or not to display the browser toolbar                                                                                                                                                                                                                                                                                                                                                                                                                   | null      |

Dependencies ![Deps](https://badgen.net/npm/dependents/use-open-window)
--------
None. Self source code only. (❤️obvious peer dep on React only)

Reliability
--------
This package is fully tested with total coverage set to [![Coverage Status](https://coveralls.io/repos/github/bartlomiejzuber/use-open-window/badge.svg)](https://coveralls.io/github/bartlomiejzuber/use-open-window). If you found any issue please report it [here](https://github.com/bartlomiejzuber/use-open-window/issues/new).

License
--------

Made with :sparkling_heart: by [Bartlomiej Zuber (bartlomiej.zuber@outlook.com)](mailto:bartlomiej.zuber@outlook.com) while traveling around the world, and licensed under the [MIT License](LICENSE)