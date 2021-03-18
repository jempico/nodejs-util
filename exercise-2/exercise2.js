const fs = require('fs');
const tar = require('tar');

const runEx2 = () => {
  tar.c(
    {
      gzip: true // this will perform the compression. No need to explicitly use zlib
    },
    ['./exercise-1']
  ).pipe(fs.createWriteStream('ex1compressed.tgz'));
}


module.exports = runEx2;