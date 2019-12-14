## hooked-react-stopwatch

[![npm](https://img.shields.io/npm/l/hooked-react-stopwatch.svg)](https://www.npmjs.com/package/hooked-react-stopwatch)
[![Coverage Status](https://coveralls.io/repos/github/bartlomiejzuber/hooked-react-stopwatch/badge.svg)](https://coveralls.io/github/bartlomiejzuber/hooked-react-stopwatch)
[![Build Status](https://travis-ci.org/bartlomiejzuber/hooked-react-stopwatch.svg?branch=master)](https://travis-ci.org/bartlomiejzuber/hooked-react-stopwatch)
[![License](https://img.shields.io/npm/v/hooked-react-stopwatch.svg)](https://github.com/bartlomiejzuber/hooked-bitcoin-text-editor/blob/master/LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/687ea567-73f1-43ad-98c8-18c33994a609/deploy-status)](https://app.netlify.com/sites/hooked-react-stopwatch/deploys)
<p align="center">
  <img src="https://github.com/Bajtas/bjts-react-stopwatch/blob/master/images/stopwatch.jpg?raw=true" alt="How component looks"/>
</p>

Highly extensible, created without single `class` used but with pure :heart: to Hooks API.
Shipped with basic CSS style!

[DEMO](https://hooked-react-stopwatch.netlify.com/)


## Installation

```sh
npm i hooked-react-stopwatch --save
```

Alternatively you may use `yarn`:

```sh
yarn add hooked-react-stopwatch
```

Link to npm:
[https://www.npmjs.com/package/hooked-react-stopwatch](https://www.npmjs.com/package/hooked-react-stopwatch)

## Usage

```javascript
import React, { Component } from 'react';
import { Stopwatch } from "hooked-react-stopwatch";
import "hooked-react-stopwatch/css/style.css"; // optional

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stopwatch />
      </div>
    );
  }
}

export default App;
```

### Props

```javascript
StopWatch.propTypes = {
  // custom classNames
  stopwatchClassName: PropTypes.string,
  timeContainerClassName: PropTypes.string,
  controlsClassName: PropTypes.string,
  playIconClassName: PropTypes.string,
  pauseIconClassName: PropTypes.string,
  resetIconClassName: PropTypes.string,
  renderControls: PropTypes.func, // custom render function for controls section
  hideHours: PropTypes.bool, // hide hours
  hideMinutes: PropTypes.bool, // hide minutes
  hideSeconds: PropTypes.bool, // hide seconds
  hideMilliseconds: PropTypes.bool, // hide milliseconds
  separators: PropTypes.arrayOf(PropTypes.string) // separators to use between hours/minutes/seconds/milliseconds
  // separator use example: [":"/*separatorBetweenHoursAndMinutes*/, ":"/*separatorBetweenMinutesAndSeconds*/, "."/*separatorBetweenSecondsAndMilliseconds*/]
};
```

License:
--------

Made with :sparkling_heart: by [Bartlomiej Zuber (bartlomiej.zuber@outlook.com)](mailto:bartlomiej.zuber@outlook.com) while traveling around the world, and licensed under the [MIT License](LICENSE)