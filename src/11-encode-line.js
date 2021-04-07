/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  return (`${str} `).split('')
    .reduce((a, c) => (c === a.symb
      ? { encoded: a.encoded, symb: a.symb, clen: a.clen + 1 }
      : { encoded: a.clen > 1 ? `${a.encoded}${a.clen}${a.symb}` : `${a.encoded}${a.symb}`, symb: c, clen: 1 }),
    { encoded: '', symb: '', clen: 0 }).encoded;
}

module.exports = encodeLine;
