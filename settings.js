'use strict';


exports.loadSettings = (hookName, settings, cb) => {
  // Setting maxHttpBufferSize to 10 MiB :)
  settings.settings.somethingthatdoesntexist.crashit = 100000000;
  cb();
};
