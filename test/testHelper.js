var jsdom = require('jsdom');
const { JSDOM } = jsdom;

const dom = new JSDOM('<!DOCTYPE html><html><head></head><body><div id="map"></div></body></html>');

global.window = dom.window;
global.document = dom.window.document;

global.$ = require('jquery');