import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }
  encrypt(message, key) {
    message = message.toUpperCase();
    let keycode = key.toUpperCase();

    const messageLength = message.length;
    keycode = keycode.repeat(Math.ceil(messageLength / key.length)).split('');

    let code = "";
    for (let i = 0; i < messageLength; i += 1) {
      if (65 <= message.charCodeAt(i) && message.charCodeAt(i) < 91) {
        code += String.fromCharCode(((message.charCodeAt(i) + keycode[0].charCodeAt(0)) % 26) + 65);
        keycode.shift();
      } else {
        code += message.charAt(i);
      }
    }

    if (this.type === false) {
      return code.split('').reverse().join('');
    }
    return code;
  }
  decrypt(message, key) {
    message = message.toUpperCase();
    let keycode = key.toUpperCase();

    const messageLength = message.length;
    keycode = keycode.repeat(Math.ceil(messageLength / key.length)).split('');

    let code = "";
    for (let i = 0; i < messageLength; i += 1) {
      if (65 <= message.charCodeAt(i) && message.charCodeAt(i) < 91) {
        code += String.fromCharCode(((message.charCodeAt(i) + 26 - keycode[0].charCodeAt(0)) % 26) + 65);
        keycode.shift();
      } else {
        code += message.charAt(i);
      }
    }

    if (this.type === false) {
      return code.split('').reverse().join('');
    }
    return code;
  }
}
