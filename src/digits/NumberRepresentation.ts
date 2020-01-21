import { DigitRepresentation } from './DigitRepresentation';

export class NumberRepresentation {
  /**
   * the digits that compose the given numbers
   */
  private digits: number[];

  /**
   *
   * @param {string} numberAsString
   */
  constructor(numberAsString: string) {
    const digitsAsString = numberAsString.split('');
    digitsAsString.forEach((digit)=>{
      if (!['0','1','2','3','4','5','6','7','8','9'].includes(digit)){
        throw new Error(`${digit} is not a valid digit`);
      }
    });
    this.digits = digitsAsString.map(Number);
  }

  public toString(): string {
    const lines = [];
    // for each digit representing the number, get the lines that compose this representation
    const allLinesOfAlldigits = this.digits
      .map(value => DigitRepresentation.of(value))
      .map(value => value.getLines());
    // compose each line of the result by concatenation of the corresponding lines of each digit
    for (let i = 0; i < 3; i++) {
      lines.push(allLinesOfAlldigits.map(lines => lines[i]).join(' '));
    }
    return lines.join('\n');
  }
}
