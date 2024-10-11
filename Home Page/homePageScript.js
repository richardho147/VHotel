window.addEventListener('scroll',scrollNav);

function scrollNav(){
    var scrollValue = window.scrollY;
    if(scrollValue < 41) document.getElementById('nav-bar').classList.remove('scrolled-nav');
    else document.getElementById('nav-bar').classList.add('scrolled-nav');
}

var sortedValue = 0

window.addEventListener('click',checkSorted);

function checkSorted(){
    if(sortedValue != 0) document.getElementById('left-sorted').style.display= "block";
    else document.getElementById('left-sorted').style.display= "none";

    if(sortedValue != 2) document.getElementById('right-sorted').style.display= "block";
    else document.getElementById('right-sorted').style.display= "none";
}


function sortedRight(){
    sortedValue = sortedValue + 1;
    if(sortedValue > 2) sortedValue = 2;
    document.getElementById('sorted-move').animate(
        {
          transform: `translate(-${sortedValue * 20}%, -0%)`,
        },
        { duration: 600, fill: "forwards" }
    );
}

function sortedLeft(){
    sortedValue = sortedValue - 1;
    if(sortedValue < 0) sortedValue = 0;
    document.getElementById('sorted-move').animate(
        {
          transform: `translate(-${sortedValue * 20}%, -0%)`,
        },
        { duration: 600, fill: "forwards" }
    );
}

function scaleM(){
    document.getElementById('promo-img').classList.toggle("scaling");
}

function scaleB(){
    document.getElementById('bg-l').classList.toggle("scaling");
    document.getElementById('bg-r').classList.toggle("scaling");
}