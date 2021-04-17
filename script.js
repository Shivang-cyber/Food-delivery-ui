(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('bottom').scrollLeft -= (delta * 40); // Multiplied by 40
        e.preventDefault();
    }
    if (document.getElementById('bottom').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('bottom').addEventListener('mousewheel', scrollHorizontally, false);
        // Firefox
        document.getElementById('bottom').addEventListener('DOMMouseScroll', scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('bottom').attachEvent('onmousewheel', scrollHorizontally);
    }
})();
function openNav() {
document.getElementById("mySidebar").style.width = "250px";
document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
document.getElementById("mySidebar").style.width = "0";
document.getElementById("main").style.marginLeft= "0";
}