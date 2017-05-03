const fs = require('fs-extra');
const path = require('path');

const rootPath = path.resolve(__dirname, '..');

fs
  .remove(path.resolve(rootPath, 'dist'))
  .then(() => {
    console.log('Removed dist/ directory');
  })
  .catch(error => {
    console.error("Couldn't remove dist/ directory");
    console.error(error);
  });
