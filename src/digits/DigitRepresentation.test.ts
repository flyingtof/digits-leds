import { DigitRepresentation } from './DigitRepresentation';

describe('DigitRepresentation', () => {
  it('should return expected representation (0 case)', () => {
    const expected = `._.
|.|
|_|`.replace(/\./g,' ');
    expect(DigitRepresentation.of(0).toString()).toBe(expected);
  });

  it('should return expected representation (1 case)', () => {
    const expected = `...
..|
..|`. replace(/\./g,' ');
    expect(DigitRepresentation.of(1).toString()).toBe(expected);
  });

  it('should return expected representation (2 case)', () => {
    const expected = `._.
._|
|_.`. replace(/\./g,' ');
    expect(DigitRepresentation.of(2).toString()).toBe(expected);
  });

  it('should return expected representation (3 case)', () => {
    const expected = `._.
._|
._|`. replace(/\./g,' ');
    expect(DigitRepresentation.of(3).toString()).toBe(expected);
  });

  it('should return expected representation (4 case)', () => {
    const expected = `...
|_|
..|`. replace(/\./g,' ');
    expect(DigitRepresentation.of(4).toString()).toBe(expected);
  });

  it('should return expected representation (5 case)', () => {
    const expected = `._.
|_.
._|`. replace(/\./g,' ');
    expect(DigitRepresentation.of(5).toString()).toBe(expected);
  });

  it('should return expected representation (6 case)', () => {
    const expected = `._.
|_.
|_|`. replace(/\./g,' ');
    expect(DigitRepresentation.of(6).toString()).toBe(expected);
  });

  it('should return expected representation (7 case)', () => {
    const expected = `._.
..|
..|`. replace(/\./g,' ');
    expect(DigitRepresentation.of(7).toString()).toBe(expected);
  });

  it('should return expected representation (8 case)', () => {
    const expected = `._.
|_|
|_|`. replace(/\./g,' ');
    expect(DigitRepresentation.of(8).toString()).toBe(expected);
  });

  it('should return expected representation (9 case)', () => {
    const expected = `._.
|_|
..|`. replace(/\./g,' ');
    expect(DigitRepresentation.of(9).toString()).toBe(expected);
  });

  it('should fail if number is greater than 9', () => {
    expect(() => DigitRepresentation.of(10)).toThrowError();
  });

  it('should fail if number is less than 0', () => {
    expect(() => DigitRepresentation.of(-1)).toThrowError();
  });
});
