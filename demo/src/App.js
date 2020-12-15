import * as React from 'react';
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
  const [handleWindowOpen] = useOpenInWindow(url, options);
  
  return (
    <div className="App">
      <div onClick={handleWindowOpen}>Click me to open new browser window</div>
    </div>
  );
}

export default App;