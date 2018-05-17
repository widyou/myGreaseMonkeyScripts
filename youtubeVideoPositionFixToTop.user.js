// ==UserScript==
// @name         Youtube video fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fix video to top position
// @author       Widyou
// @match        https://www.youtube.com/watch?*
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
        };

    })();
    window.addEventListener('scroll', videoPositionToFixed);
    window.addEventListener('resize', videoPositionToFixed);
    window.addEventListener('load', videoPositionToFixed);
})(window);
