import * as React from "react";
import { useOpenInWindow } from "use-open-window";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/a11y-dark.css";
hljs.registerLanguage("javascript", javascript);

const url = "https://www.google.com/";
const options = {
  centered: true /* default */,
  spec: {
    width: 800 /* window width */,
    height: 600 /* window height */,
  },
};

const App = () => {
  const [handleWindowOpen] = useOpenInWindow(url, options);

  React.useEffect(() => {
    document.querySelectorAll("pre code").forEach((el) => {
      hljs.highlightElement(el);
    });
  }, []);
  return (
    <div className="App">
      <pre>
        <code class="language-javascript">
          {`
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
      `}
        </code>
      </pre>
      <div onClick={handleWindowOpen}>Click me to open new browser window</div>
    </div>
  );
};

export default App;
