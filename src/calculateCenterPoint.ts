export function calculateCenterPoint(targetWidth: number, targetHeight: number) {
  const screenX = window.screenX || window.screenLeft;
  const screenY = window.screenY || window.screenTop;
  const outerWidth = window.outerWidth || document.documentElement.clientWidth;
  const outerHeight = window.outerHeight || document.documentElement.clientHeight;

  const left = screenX + (outerWidth - targetWidth) / 2;
  const top = screenY + (outerHeight - targetHeight) / 2;

  return {
    left,
    top
  };
}
