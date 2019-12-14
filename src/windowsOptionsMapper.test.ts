import { windowOptionsMapper } from './windowOptionsMapper';

describe('windowOptionsMapper()', () => {
  it('should map object to single string', () => {
    const test1 = 'value1';

    expect(typeof windowOptionsMapper({ test1 })).toBe('string');
  });

  it('should correctly map single property object', () => {
    const test1 = 'value1';

    expect(windowOptionsMapper({ test1 })).toBe(`test1=${test1}`);
  });

  it('should correctly map many properties into single string', () => {
    const test1 = 'value1';
    const test2 = 'value2';
    const test3 = 'value3';
    const test4 = 'value4';
    const test5 = 'value5';

    expect(windowOptionsMapper({ test1, test2, test3, test4, test5 })).toBe(
      `test1=${test1},test2=${test2},test3=${test3},test4=${test4},test5=${test5}`
    );
  });
});
