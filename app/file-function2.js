const fs = require('fs-extra');
const R = require('ramda');

const moveDirectory2 = (path, animal) => fs.move('./'+path, './animal/'+animal);

module.exports = {moveDirectory2};
