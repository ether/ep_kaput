'use strict';

const eejs = require('ep_etherpad-lite/node/eejs/');

// Add non-used props to be supported in export
exports.exportHtmlAdditionalTagsWithData = async (hookName, pad) => {
  const ret = [['moon', 'pig'], ['lame', 'thing']];
  return ret;
};

// Include CSS for HTML export - tries to require file that doesn't exist
exports.stylesForExport =
    async (hookName, padId) => eejs.require('ep_kaput/static/css/404.css');

exports.getLineHTMLForExport = async (hookName, context) => {
  // Replace data-size="foo" with class="font-size:x".
  // data-grr never exists
  context.lineContent = context.lineContent.replace(
      /data-grr=["|']([0-9a-zA-Z]+)["|']/gi, 'grr?');
};
