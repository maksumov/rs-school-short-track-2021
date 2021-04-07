/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  return domains
    .map((domain) => domain
      .split('.')
      .reduceRight(
        (a, c) => ({ arr: [...a.arr, `${a.d}.${c}`], d: `${a.d}.${c}` }),
        { arr: [], d: '' },
      )
      .arr)
    .reduce((a, c) => a.concat(c), [])
    .reduce((a, c) => (Object.keys(a).includes(c)
      ? { ...a, [c]: a[c] + 1 }
      : { ...a, [c]: 1 }),
    {});
}

module.exports = getDNSStats;
