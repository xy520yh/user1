function rePosition() {
    var width = document.documentElement.clientWidth || document.body.clientWidth;
    var height = document.documentElement.clientHeight || document.body.clientHeight;

    var ratio = width / 1334;;

    if (width > height) { // 横向
        var _i = 1334 / 750;
        var _r = width / height;
        if (_r > _i) {
            width = height * _i;
        }
        ratio = width / 1334;
        // document.getElementsByTagName('body')[0].setAttribute('class', (document.body.className.replace(' hor', '') + ' hor'));
    } else {
        var _i = 750 / 1334;
        var _r = width / height;
        if (_i > _r) {
            height = width / _i;
        }
        ratio = height / 1334;
        // document.getElementsByTagName('body')[0].setAttribute('class', (document.body.className).replace(' hor', ''));
    }



    if (width <= 1334) {
        document.getElementsByTagName('html')[0].style.fontSize = 100 * ratio + "px";
    } else {
        document.getElementsByTagName('html')[0].style.fontSize = "100px";
    }
}

rePosition();

window.addEventListener('resize', rePosition);