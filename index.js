'use strict';

const eejs = require('ep_etherpad-lite/node/eejs/');
const settings = require('ep_etherpad-lite/node/utils/Settings');

// Tries to include content that never existed...
exports.eejsBlock_editbarMenuLeft = (hookName, args, callback) => {
  args.content += eejs.require('ep_kaput/templates/neverExisted.ejs');
  return callback(); // intentionally doing return cb() instead of callback;
};
exports.eejsBlock_adminMenu = (hookName, args, callback) => {
  args.content += eejs.require('ep_kaput/templates/neverExisted.ejs');
  return; // intentionally doing return instead of callback;
};


// puts credentials in console ;/
console.error('your credentials you probably dont want public', settings.users);

// intentionally commented out dd_format which is required in ep.json
/*
exports.eejsBlock_dd_format = (hookName, args, cb) => {
  args.content += eejs.require('ep_kaput/templates/fileMenu.ejs');
  return cb();
};
*/

// intentionally commented out second eejsBlock item which is required by ep.json
/*
exports.eejsBlock_timesliderStyles = (hookName, args, cb) => {
  args.content += `<style>${eejs.require('ep_kaput/static/css/size.css')}</style>`;
  return cb();
};
*/

exports.padInitToolbar = (hookName, args, callback) => {
  console.error('I pretend you has been haxed');
  return; // intentionally missing callback
};
