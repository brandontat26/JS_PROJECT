// Note: Require the cpu and webgl backend and add them to package.json as peer dependencies.
require('@tensorflow/tfjs-node-gpu');
const cocoSsd = require('@tensorflow-models/coco-ssd');
const fs = require('fs-extra');
const jpeg = require('jpeg-js');
const Bromise = require('bluebird');
const R = require('ramda');
const {ensureDirectoriesList} = require("./app/file-functions");
const {moveDirectory2} = require("./app/file-function2");
const {readOnlyJpg} = require("./app/file-function3");

const readJpg = async (path) => jpeg.decode(await fs.readFile(path), true);

(async () => {
    const imgList = await Bromise.map(
        ['./dog.jpg', './panda.jpg', './little-red-panda.jpg', './'],
        readJpg
    );

    // Load the model.
    const model = await cocoSsd.load();

    // Classify the image.
    const predictions = await Bromise.map(imgList, (x) => model.detect(x));

    console.log('Predictions: ');
    console.log(R.flatten(predictions));
    let a = R.flatten(predictions)
    const tab = R.pipe(
        R.map(R.prop('class')),
        R.tap(console.log)
    )



    const dirsToCreate = tab(a);


    const tab2= R.pipe(
        readOnlyJpg,
        predictJpgs, //(map)
        movejpg, // map
        R.tap(console.log)
    )('./');

    ensureDirectoriesList(dirsToCreate)
    moveDirectory2()
    readOnlyJpg()

})();

