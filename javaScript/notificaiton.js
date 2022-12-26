var box  = document.getElementById('box');
var down = false;


function toggleNotifi(){
    if (down) {
        box.style.height  = '0px';
        box.style.opacity = 0;
        box.style.zIndex = 2000;
        down = false;

    }else {
        box.style.height  = '510px';
        box.style.opacity = 1;
        down = true;
    }
}