// ==UserScript==
// @name         dc gallary list remove margin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://gall.dcinside.com/mgallery/board/lists/*
// @match        http://gall.dcinside.com/board/lists/*
// @grant        none
// @run-at document-end
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.querySelectorAll('.gallery_box')[0].style.height='1px';
})();

