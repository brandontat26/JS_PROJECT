const applyN = ([dims]) =>
    R.applySpec({
        X: R.pipe(R.nth(0), R.flip(R.divide)(dims.width)),
        Y: R.pipe(R.nth(1), R.flip(R.divide)(dims.height)),
        Width: R.pipe(R.nth(2), R.flip(R.divide)(dims.width)),
        Height: R.pipe(R.nth(3), R.flip(R.divide)(dims.height))
    });

const normalizeImage = (imageDimensions) =>
    R.map(R.over(R.lensProp('bbox'), applyN(imageDimensions)));

