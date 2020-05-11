var icon = document.getElementById('moon')
var lay = document.getElementById('page-content');
var list = document.querySelectorAll('#list')
var heading = document.getElementById("heading");
var social = document.querySelectorAll(".social-icon");
var dash = document.getElementById('dash');

// function changeImage(){
//     imgsrc = document.getElementById('moon').src;
//     if( imgsrc.indexOf("/images/moon.png") != -1 ){
//         icon.src = "/images/sun.png";
//         document.body.style.backgroundColor = 'white';
//         list.forEach(i => {
//             i.style.color = '#000000';
//         })
//         heading.style.color = 'rgb(41, 38, 62)';
//         dash.style.color = 'black';
//         lay.style.color = 'black';
//     }else{
//         icon.src = "/images/moon.png";
//         document.body.style.backgroundColor = 'rgb(41, 38, 62)';
//         list.forEach(i => {
//             i.style.color = 'white';
//         })
//         heading.style.color = 'rgb(130, 187, 207)';
//         dash.style.color = 'white';
//         lay.style.color = 'white';
//     }   
// }

var preloader = document.getElementById('loader');
function loader(){
    preloader.style.display = 'none';
}


var mybtn = document.getElementById('mybtn');

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        mybtn.style.display = 'block';
    }else{
        mybtn.style.display = 'none';
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// if($('#mob-menu').is(':visible')){
//     $('body').addClass("fixedPosition");
// }else{
//     $('body').removeClass("fixedPosition");
// }


// var nav = document.getElementById("mynav");

// window.onscroll = function(){
//     if(window.pageXOffset > 100){
//         nav.style.position = "fixed";
//         nav.style.top = 0;
//     }else{
//         nav.style.position = "absolute";
//         nav.style.top = 0;
//     }
// }