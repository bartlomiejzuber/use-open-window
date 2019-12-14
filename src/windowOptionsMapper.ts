export function windowOptionsMapper(object: object) {
  const options = Object.entries(object).map(([key, value]) => `${key}=${value}`);
  return options.join(',');
}
