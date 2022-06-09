function yes(){
alert('<3');
}
function no() {
    let no=document.getElementById('no');
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    no.style.position = 'relative';
    document.getElementById('no').style.left = x + 'px';
    document.getElementById('no').style.top = y + 'px';
}

