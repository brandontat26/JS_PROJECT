const fs = require('fs-extra');
const R = require('ramda');


const readDir_ = path => fs.readdir(path)
const filterJpg_ = R.filter(R.test(/\.jpg/))

const readOnlyJpg = R.pipe(readDir_, R.andThen(filterJpg_), R.andThen(R.tap(console.log)),);

module.exports = {readOnlyJpg};