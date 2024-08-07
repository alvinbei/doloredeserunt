const fs = require('fs');
const path = require('path');

const node_path = path.join(__dirname, 'example.txt');

const options = {
  encoding: 'utf8',
  flag: 'r',
  path: node_path,
};

fs.readFile(options.path, options.encoding, (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File content:', data);
  }
});
