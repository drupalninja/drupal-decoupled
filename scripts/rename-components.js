const fs = require('fs');
const path = require('path');

const directoryPath = './components';

fs.readdir(directoryPath, (err, directories) => {
  if (err) {
    return console.error('Unable to scan directory: ' + err);
  }

  directories.forEach((directory) => {
    if (directory === '.' || directory === '..') {
      return;
    }

    const directoryFullPath = path.join(directoryPath, directory);
    const newDirectoryName = directory.charAt(0).toUpperCase() + directory.slice(1);
    const newDirectoryFullPath = path.join(directoryPath, newDirectoryName);

    // Rename the directory
    fs.rename(directoryFullPath, newDirectoryFullPath, (err) => {
      if (err) {
        return console.error('Error renaming directory: ' + err);
      }

      console.log(`Renamed directory ${directory} to ${newDirectoryName}`);

      // Rename files inside the renamed directory
      fs.readdir(newDirectoryFullPath, (err, files) => {
        if (err) {
          return console.error('Unable to scan subdirectory: ' + err);
        }

        files.forEach((file) => {
          if (file === '.' || file === '..') {
            return;
          }

          const oldFilePath = path.join(newDirectoryFullPath, file);
          const newFileName = file.charAt(0).toUpperCase() + file.slice(1);
          const newFilePath = path.join(newDirectoryFullPath, newFileName);

          fs.rename(oldFilePath, newFilePath, (err) => {
            if (err) {
              return console.error('Error renaming file: ' + err);
            }

            console.log(`Renamed file ${file} to ${newFileName} in directory ${newDirectoryName}`);
          });
        });
      });
    });
  });
});
