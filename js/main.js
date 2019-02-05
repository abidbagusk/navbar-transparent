window.onscroll = function () {
    scroll()
};

function scroll() {
    var navbar = document.getElementsByClassName('navbar')[0];
    var scroll = document.documentElement.scrollTop;

    if (scroll > 50) {
        navbar.style.background = 'darkslateblue';
    } else {
        navbar.style.background = 'transparent';
    }
}