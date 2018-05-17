// ==UserScript==
// @name         Youtube video fix
// @namespace    http://widyou.net/
// @version      0.2
// @description  Fix video to top position
// @author       Widyou
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function(window) {
    'use strict';

    var videoPositionToFixed = (function () {
        var state = {
            videoWidth: 0,
            videoHeight: 0
        };
        return function() {
            if (location.href.match(/^https:\/\/www\.youtube\.com\/watch\?/)) {
                var videoComputedStyle = document.defaultView.getComputedStyle(document.querySelector('#player video'),'');
                var videoWidth = +videoComputedStyle.width.replace(/\D+/g,'');
                var videoHeight = +videoComputedStyle.height.replace(/\D+/g,'');
                var nowWindowWidth = window.innerWidth;
                if (state.videoWidth != videoWidth || state.videoHeight != videoHeight) {
                    state.videoWidth = videoWidth;
                    state.videoHeight = videoHeight;

                    var topHeight = +document.defaultView.getComputedStyle(document.getElementById('container'),'').height.replace(/\D+/g,'');
                    var player = document.querySelector('#player.style-scope.ytd-watch');
                    player.style.position = 'fixed';
                    player.style.zIndex = 1000;
                    player.style.top = topHeight+'px';

                    document.getElementById('page-manager').style.marginTop = (videoHeight + topHeight) + 'px';
                }
            } else {
                document.getElementById('page-manager').style.marginTop = 'auto';
            }
        };
    })();
    window.addEventListener('scroll', videoPositionToFixed);
    window.addEventListener('resize', videoPositionToFixed);
    window.addEventListener('load', videoPositionToFixed);
})(window);
