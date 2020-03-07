import * as React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useOpenInWindow } from './useOpenInWindow';

describe('useOpenInWindow()', () => {
  it('should wait for callback invoke', () => {
    const spy = jest.spyOn(window, 'open');
    const HookTestComponent: React.FunctionComponent<any> = () => {
      const [handleWindowOpen] = useOpenInWindow('blabla');
      return (
        <div>
          <div data-testid="onClickHandler" onClick={handleWindowOpen}></div>
        </div>
      );
    };

    render(<HookTestComponent />);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should call window.open with correct params', () => {
    const windowOpenMock = jest.fn();
    Object.defineProperty(window, 'open', { get: () => windowOpenMock });
    const url = '/blabla';
    const HookTestComponent: React.FunctionComponent<any> = () => {
      const [handleWindowOpen] = useOpenInWindow(url);
      return (
        <div>
          <div data-testid="onClickHandler" onClick={handleWindowOpen}></div>
        </div>
      );
    };

    const { getByTestId } = render(<HookTestComponent />);
    fireEvent.click(getByTestId('onClickHandler'));

    expect(windowOpenMock).toHaveBeenCalledWith(url, expect.any(String), expect.any(String));
  });

  it('should focus new window', () => {
    const newWindowMock = {
      focus: jest.fn()
    };
    const windowOpenMock = jest.fn(() => newWindowMock);
    Object.defineProperty(window, 'open', { get: () => windowOpenMock });
    const url = '/blabla';
    const HookTestComponent: React.FunctionComponent<any> = () => {
      const [handleWindowOpen] = useOpenInWindow(url);
      return (
        <div>
          <div data-testid="onClickHandler" onClick={handleWindowOpen}></div>
        </div>
      );
    };

    const { getByTestId } = render(<HookTestComponent />);
    fireEvent.click(getByTestId('onClickHandler'));

    expect(newWindowMock.focus).toHaveBeenCalledTimes(1);
  });

  it('should open not centered window', () => {
    const newWindowMock = {
      focus: jest.fn()
    };
    const windowOpenMock = jest.fn(() => newWindowMock);
    Object.defineProperty(window, 'open', { get: () => windowOpenMock });
    const url = '/blabla';
    const HookTestComponent: React.FunctionComponent<any> = () => {
      const [handleWindowOpen] = useOpenInWindow(url, { centered: false });
      return (
        <div>
          <div data-testid="onClickHandler" onClick={handleWindowOpen}></div>
        </div>
      );
    };

    const { getByTestId } = render(<HookTestComponent />);
    fireEvent.click(getByTestId('onClickHandler'));

    expect(windowOpenMock).toHaveBeenCalledWith(
      expect.any(String),
      expect.not.stringContaining('top=0'),
      expect.any(String)
    );
  });
});
