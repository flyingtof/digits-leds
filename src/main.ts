import * as readline from 'readline';
import { NumberRepresentation } from './digits/NumberRepresentation';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
rl.question('enter an number: ', answer => {
  const result = new NumberRepresentation(answer).toString();
  console.log(result);
  process.exit(0);
});
