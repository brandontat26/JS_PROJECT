const fs = require('fs-extra');
const R = require('ramda');

const ensureDirectory_ = (animal) => fs.ensureDir(`./animal/${animal}`);

const ensureDirectoriesList = R.map(ensureDirectory_);

module.exports = {ensureDirectoriesList};