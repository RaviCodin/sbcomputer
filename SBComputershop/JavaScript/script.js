alert("WellCome To OFFER Zone");
var num = 0;
slideshow();

function slideshow(){
    var show = document.getElementsByClassName("slide");
    for(let i=0; i<show.length; i++){
    show[i].style.display="none";
}

num++;
let len = show.length;

if(num > len ){
    num=1;
}
show[num-1].style.display = "block";
setTimeout(slideshow, 1000)
}

// first slider
var num1 =0;
slideshow2();

function slideshow2(){
    var show2 =document.getElementsByClassName("slide1");
    for(let i=0; i<show2.length; i++){
        show2[i].style.display="none";
    }
num1++;
 

if(num1 > show2.length ){
    num1=1;
}
show2[num1-1].style.display = "block";
setTimeout(slideshow2, 1000)
}


// nav button

$(document).ready(function(){
    $("#click").click(function(){
        $("#nav").slideToggle("slow");
    });
});

// men div
let men_row = document.getElementById("men_row");
let women_row = document.getElementById("women_row");
let bedroom_row = document.getElementById("bedroom_row");
let toy_row = document.getElementById("toy_row");

var men0= document.getElementById("men");
var women0= document.getElementById("women");
var bedroom0= document.getElementById("bedroom");
var toy0= document.getElementById("toy");



function men(){
    men0.style = "background-color: rgb(255, 166, 0)";
    women0.style = "background-color: white";
    bedroom0.style = "background-color: white";
    toy0.style = "background-color: white";;


    men_row.style.display = "block";
    women_row.style.display = "none";
    bedroom_row.style.display = "none";
    toy_row.style.display = "none";
}
console.log(men_row);

function women(){
    women0.style = "background-color: rgb(255, 166, 0)";
    men0.style = "background-color: white";
    bedroom0.style = "background-color: white";
    toy0.style = "background-color: white";

    women_row.style.display = "block";
    men_row.style.display = "none";
    bedroom_row.style.display = "none";
    toy_row.style.display = "none";
}

function bedroom(){
    bedroom0.style = "background-color: rgb(255, 166, 0)";
    men0.style = "background-color: white";
    women0.style = "background-color: white";
    toy0.style = "background-color: white";


    bedroom_row.style.display = "block";
    men_row.style.display = "none";
    women_row.style.display = "none";
    toy_row.style.display = "none";
}

function toy(){
    toy0.style = "background-color: rgb(255, 166, 0)";
    men0.style = "background-color: white";
    bedroom0.style ="background-color: white";
    women0.style = "background-color: white";


    toy_row.style.display = "block";
    men_row.style.display = "none";
    bedroom_row.style.display = "none";
    women_row.style.display = "none";
}

