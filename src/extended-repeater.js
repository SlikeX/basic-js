import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (str != "string") {
    str = String(str)
  } let a = []
  let b = []
  if (!options.separator) { options.separator = "+"; }
  if (!options.additionSeparator) { options.additionSeparator = "|"; }
  if (options.hasOwnProperty("addition")) {
    if (typeof options.addition != 'string') { options.addition = String(options.addition); }
    for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
      b.push(options.addition);
      b.push(options.additionSeparator);
    }
    b.push(options.addition);
    b.push(str);
    str = b.reverse().join('');
  }
  for (let j = 0; j < options.repeatTimes - 1; j++) {
    a.push(str);
    a.push(options.separator);
  }
  a.push(str);
  return a.join('');
}
