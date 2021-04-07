/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

/**
 * Helper for select uniq filename
 * @param {String} name - name of file for which we should select uniq name
 * @param {String[]} reserved - array of existing (reserved) filenames
 * @returns uniq file name
 */
function selectName(name, reserved) {
  if (!reserved.includes(name)) return name;
  let suffix = 1;
  while (reserved.includes(`${name}(${suffix})`)) {
    suffix += 1;
  }
  return `${name}(${suffix})`;
}

function renameFiles(names) {
  const uniq = [];
  names.forEach((file) => {
    uniq.push(selectName(file, uniq));
  });
  return uniq;
}

module.exports = renameFiles;
