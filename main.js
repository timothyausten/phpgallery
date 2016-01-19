/*global $, alert, autogalleryfunc*/
/*jslint plusplus: true */


// Resize header
// Not used anymore because header text is in svg
/*
function reSize() {
    'use strict';
    //var size = $(window).width()/100,
    var size = window.innerWidth,
        maxwidth = 846,
        hh1, hh2;
    if (size > maxwidth) {
        hh1 = maxwidth * 0.06 + 'px';
        hh2 = maxwidth * 0.04 + 'px';
    } else {
        hh1 = '6vw';
        hh2 = '4vw';
    }
    //$('.headerH1').css('font-size', hh1);
    
    document.getElementsByClassName('headerH1')[0].style.fontSize = hh1;
    document.getElementsByClassName('headerH2')[0].style.fontSize = hh2;
}
reSize();

$(function () {
    $(window).resize(reSize);
});
*/


// Launch autogallery
(function () {
    var fileList = fileListPhp;
    // var fileList; // Use default
    var dir = 'accountingpics/';
    var fileextension; // Use default
    var galleryContainer; // Use default
    var maxwidth; // Use default
    var maxheight; // Use default
    autogalleryfunc(fileList, dir, fileextension, galleryContainer, maxwidth, maxheight);
}());


