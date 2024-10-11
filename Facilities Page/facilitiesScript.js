window.addEventListener('scroll',scrollNav);

function scrollNav(){
    var scrollValue = window.scrollY;
    if(scrollValue < 41) document.getElementById('nav-bar').classList.remove('scrolled-nav');
    else document.getElementById('nav-bar').classList.add('scrolled-nav');
}

function scale1(){
    document.getElementById('f-img1').classList.toggle("scaling");
}
function scale2(){
    document.getElementById('f-img2').classList.toggle("scaling");
}
function scale3(){
    document.getElementById('f-img3').classList.toggle("scaling");
}
function scale4(){
    document.getElementById('f-img4').classList.toggle("scaling");
}
function scale5(){
    document.getElementById('f-img5').classList.toggle("scaling");
}
function scale6(){
    document.getElementById('f-img6').classList.toggle("scaling");
}
function scale7(){
    document.getElementById('f-img7').classList.toggle("scaling");
}
function scale8(){
    document.getElementById('f-img8').classList.toggle("scaling");
}