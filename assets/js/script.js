var div = document.getElementById('replydiv');
var display = 1;
function hideShow() {
    if (display == 1) {
        div.style.display = 'block';
        display = 0;
    }
    else {
        div.style.display = 'none';
        display = 1;
    }
}