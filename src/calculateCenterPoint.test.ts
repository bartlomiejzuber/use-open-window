import { calculateCenterPoint } from './calculateCenterPoint';

describe('calculateCenterPoint()', () => {
  it('should calculate center point for square', () => {
    const screenX = 1920,
      screenY = 0,
      outerWidth = 1920,
      outerHeight = 1040;
    Object.defineProperty(window, 'screenX', { get: () => screenX });
    Object.defineProperty(window, 'screenY', { get: () => screenY });
    Object.defineProperty(window, 'outerWidth', { get: () => outerWidth });
    Object.defineProperty(window, 'outerHeight', { get: () => outerHeight });

    expect(calculateCenterPoint(500, 500)).toMatchObject({ left: 2630, top: 270 });
  });

  it('should calculate center point when height > width', () => {
    const screenX = 1920,
      screenY = 0,
      outerWidth = 1920,
      outerHeight = 1040;
    Object.defineProperty(window, 'screenX', { get: () => screenX });
    Object.defineProperty(window, 'screenY', { get: () => screenY });
    Object.defineProperty(window, 'outerWidth', { get: () => outerWidth });
    Object.defineProperty(window, 'outerHeight', { get: () => outerHeight });

    expect(calculateCenterPoint(500, 1000)).toMatchObject({ left: 2630, top: 20 });
  });

  it('should calculate center point when width > height', () => {
    const screenX = 1920,
      screenY = 0,
      outerWidth = 1920,
      outerHeight = 1040;
    Object.defineProperty(window, 'screenX', { get: () => screenX });
    Object.defineProperty(window, 'screenY', { get: () => screenY });
    Object.defineProperty(window, 'outerWidth', { get: () => outerWidth });
    Object.defineProperty(window, 'outerHeight', { get: () => outerHeight });

    expect(calculateCenterPoint(1000, 500)).toMatchObject({ left: 2380, top: 270 });
  });

  it('should use screenLeft & documentElement to calculate center point', () => {
    const screenX = undefined,
      screenY = 0,
      outerWidth = undefined,
      outerHeight = undefined;
    const { documentElement } = document;
    Object.defineProperty(window, 'screenX', { get: () => screenX });
    Object.defineProperty(window, 'screenY', { get: () => screenY });
    Object.defineProperty(window, 'outerWidth', { get: () => outerWidth });
    Object.defineProperty(window, 'outerHeight', { get: () => outerHeight });

    const clientWidth = 1920,
      clientHeight = 1040,
      screenLeft = 1920;
    Object.defineProperty(window, 'screenLeft', { get: () => screenLeft });  
    Object.defineProperty(documentElement, 'clientWidth', { get: () => clientWidth });
    Object.defineProperty(documentElement, 'clientHeight', { get: () => clientHeight });

    expect(calculateCenterPoint(500, 500)).toMatchObject({ left: 2630, top: 270 });
  });
});
