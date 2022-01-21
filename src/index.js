const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const obj = {
        '00': '',
        '10': '.',
        '11': '-',
    };
    let arr = expr.split('**********').map(x => {
        const word = [];
        for (let i = 0; i < x.length - 1; i = i + 10) {
            const symbol = +x.substr(i, 10) + '';
            const letter = [];
            for (let s = 0; s < symbol.length; s = s + 2) {
                const pare = symbol[s] + symbol[s + 1];
                letter.push(obj[pare]);
            }
            word.push(MORSE_TABLE[letter.join('')]);
        }
        return word.join('');
    });
    return arr.join(' ');
}

module.exports = {
    decode
}