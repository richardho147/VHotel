window.addEventListener('scroll',scrollNav);

function scrollNav(){
    var scrollValue = window.scrollY;
    if(scrollValue < 41) document.getElementById('nav-bar').classList.remove('scrolled-nav');
    else document.getElementById('nav-bar').classList.add('scrolled-nav');
}

function scale1(){
    document.getElementById('history-img1').classList.toggle("scaling");
}
function scale2(){
    document.getElementById('history-img2').classList.toggle("scaling");
}
function scale3(){
    document.getElementById('history-img3').classList.toggle("scaling");
}