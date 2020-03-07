import { useCallback, useState } from 'react';

import { calculateCenterPoint } from './calculateCenterPoint';
import { windowOptionsMapper } from './windowOptionsMapper';

export type SpecsOption = 'yes' | 'no' | 1 | 0;

export interface UseOpenInWindowOptions {
  /* Specifies the target attribute or the name of the window. The following values are supported:
        _blank - URL is loaded into a new window, or tab. This is default
        _parent - URL is loaded into the parent frame
        _self - URL replaces the current page
        _top - URL replaces any framesets that may be loaded
        name - The name of the window (Note: the name does not specify the title of the new window)
  */
  name?: '_blank' | '_parent' | '_self' | '_top' | string;
  /* specifies if window should be centered, default true */
  centered?: boolean;
  /* put window in focus, default true */
  focus?: boolean;
  /* Optional. A comma-separated list of items, no whitespaces. */
  specs?: {
    /* The height of the window. Min. value is 100, default is 800*/
    height: number;
    /* The width of the window. Min. value is 100, default is 800*/
    width: number;
    /* The left position of the window. Negative values not allowed */
    left?: number;
    /* The top position of the window. Negative values not allowed */
    top?: number;
    /* Whether or not to display the window in theater mode. Default is no. IE only */
    channelmode?: SpecsOption;
    directories?: SpecsOption;
    /* Whether or not to display the browser in full-screen mode. Default is no. A window in full-screen mode must also be in theater mode. IE only */
    fullscreen?: SpecsOption;
    /* Whether or not to display the address field. Opera only */
    location?: SpecsOption;
    /*	Whether or not to display the menu bar */
    menubar?: SpecsOption;
    /*	Whether or not the window is resizable. IE only */
    resizable?: SpecsOption;
    /*	Whether or not to display scroll bars. IE, Firefox & Opera only */
    scrollbars?: SpecsOption;
    /*	Whether or not to add a status bar */
    status?: SpecsOption;
    /*	Whether or not to display the title bar. Ignored unless the calling application is an HTML Application or a trusted dialog box */
    titlebar?: SpecsOption;
    /*	Whether or not to display the browser toolbar. IE and Firefox only */
    toolbar?: SpecsOption;
  };
}

export const defaultOptions: Required<UseOpenInWindowOptions> = {
  name: '_blank',
  centered: true,
  focus: true,
  specs: {
    height: 300,
    width: 600,
    scrollbars: 'yes'
  }
};

export const useOpenInWindow = (url: string, options: UseOpenInWindowOptions = {}) => {
  const [newWindowHandler, setNewWindowHandler] = useState<Window | null>();
  const openInWindow = useCallback(
    (event: React.MouseEvent) => {
      if (event) {
        event.preventDefault();
      }

      const { specs } = options;
      const { specs: defaultSpecs } = defaultOptions;
      const mixedOptions = { ...defaultOptions, ...options };
      const mixedSpecs = { ...defaultSpecs, ...specs };
      const { focus, name, centered } = mixedOptions;
      let windowOptions = '';

      if (centered) {
        const { width, height, ...restSpecs } = mixedSpecs;
        const centerPoint = calculateCenterPoint(width, height);
        windowOptions = windowOptionsMapper({ width, height, ...centerPoint, ...restSpecs });
      } else {
        windowOptions = windowOptionsMapper(mixedSpecs);
      }

      const newWindow = window.open(url, name, windowOptions);

      // Puts focus on the newWindow
      if (focus && newWindow) newWindow.focus();

      setNewWindowHandler(newWindow);
    },
    [url, options, setNewWindowHandler]
  );

  return [openInWindow, newWindowHandler] as [() => void, Window | null | undefined];
};
