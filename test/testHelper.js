var jsdom = require('jsdom');
const { JSDOM } = jsdom;

const dom = new JSDOM('' +
'<!DOCTYPE html>' +
'<html>' +
'<head>' +
'</head>' +
'<body>' +
    '<div id="map">' +
    '</div>' +
    '<div class="heart-container">' +
        '<div class="heart-box">' +
            '<input id="toggle-heart_post_1" class="toggle-heart" data-type="post" data-id="1" data-count="0" type="checkbox" />' +
            '<label for="toggle-heart_post_id" class="toggle-heart-label">❤</label>' +
        '</div>' +
        '<div class="heart-count-text">' +
            '<span id="count-heart_post_1" class="heart-count zeroCount">0</span> bedanken sich dafür' +
        '</div>'+
    '</div>' +
'</body>' +
'</html>'
);

global.window = dom.window;
global.document = dom.window.document;

global.$ = require('jquery');