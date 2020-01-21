export class DigitRepresentation {
  private static digits: DigitRepresentation[] = [
    DigitRepresentation.zero(),
    DigitRepresentation.one(),
    DigitRepresentation.two(),
    DigitRepresentation.three(),
    DigitRepresentation.four(),
    DigitRepresentation.five(),
    DigitRepresentation.six(),
    DigitRepresentation.seven(),
    DigitRepresentation.height(),
    DigitRepresentation.nine(),
  ];

  private constructor(private readonly grid: string[][]) {
    this.grid = grid;
  }

  /**
   * @return {string} a String representation of this digit
   */
  public toString(): string {
    // render each line separated by a new line
    return this.getLines().join('\n');
  }

  public getLines(): string[] {
    return this.grid.map(this.render);
  }

  private render(line: string[]) {
    return line.join('');
  }

  public static of(n: number): DigitRepresentation {
    if (n >= 0 && n <= 9) {
      return DigitRepresentation.digits[n];
    } else {
      throw new Error('the given number is not a digit');
    }
  }

  private static zero() {
    return new DigitRepresentation([
      [' ', '_', ' '],
      ['|', ' ', '|'],
      ['|', '_', '|'],
    ]);
  }
  private static one() {
    return new DigitRepresentation([
      [' ', ' ', ' '],
      [' ', ' ', '|'],
      [' ', ' ', '|'],
    ]);
  }
  private static two() {
    return new DigitRepresentation([
      [' ', '_', ' '],
      [' ', '_', '|'],
      ['|', '_', ' '],
    ]);
  }
  static three(): DigitRepresentation {
    return new DigitRepresentation([
      [' ', '_', ' '],
      [' ', '_', '|'],
      [' ', '_', '|'],
    ]);
  }
  static four(): DigitRepresentation {
    return new DigitRepresentation([
      [' ', ' ', ' '],
      ['|', '_', '|'],
      [' ', ' ', '|'],
    ]);
  }
  static five(): DigitRepresentation {
    return new DigitRepresentation([
      [' ', '_', ' '],
      ['|', '_', ' '],
      [' ', '_', '|'],
    ]);
  }
  static six(): DigitRepresentation {
    return new DigitRepresentation([
      [' ', '_', ' '],
      ['|', '_', ' '],
      ['|', '_', '|'],
    ]);
  }
  static seven(): DigitRepresentation {
    return new DigitRepresentation([
      [' ', '_', ' '],
      [' ', ' ', '|'],
      [' ', ' ', '|'],
    ]);
  }
  static height(): DigitRepresentation {
    return new DigitRepresentation([
      [' ', '_', ' '],
      ['|', '_', '|'],
      ['|', '_', '|'],
    ]);
  }
  static nine(): DigitRepresentation {
    return new DigitRepresentation([
      [' ', '_', ' '],
      ['|', '_', '|'],
      [' ', ' ', '|'],
    ]);
  }
}
