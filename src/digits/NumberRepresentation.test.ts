import { NumberRepresentation } from './NumberRepresentation';

describe('Number', () => {
  it('should represent the given number as expected (1)', () => {
    const expected = `._. ... ._.
|_| ..| |.|
..| ..| |_|`.replace(/\./g,' ');
    expect(new NumberRepresentation('910').toString()).toBe(expected);
  });

  it('should represent the given number as expected (2)', () => {
    const expected = `... ._. ._. ... ._.
..| ._| ._| |_| |_.
..| |_. ._| ..| ._|`.replace(/\./g,' ');
    expect(new NumberRepresentation('12345').toString()).toBe(expected);
  });

  it('should fail if given value is not a number', () => {
    expect(()=>{new NumberRepresentation('12345 this is not a number')})
        .toThrowError();
  });
});
