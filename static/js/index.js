'use strict';

// Bind the event handler to the toolbar buttons
exports.postAceInit = (hookName, context) => {
  // lots of easy things you can do here to crash the pad..
};

// Intentionally commented out function.
/*
exports.aceAttribsToClasses = (hookName, context) => {
};
*/


exports.aceCreateDomLine = (hookName, context) => [{
  extraOpenTags: 'HAX',
  extraCloseTags: 'HAXED',
  cls: context.cls,
}];

// Intentionally empty function
exports.aceInitialized = (hookName, context) => {};

// Inteionally missing CSS file.
exports.aceEditorCSS = () => ['ep_kaput/static/css/size.css'];

exports.postToolbarInit = (hookName, context) => {
  top.console.log('attempt to write to console top..');
};
