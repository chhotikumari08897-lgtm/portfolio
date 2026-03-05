function darkMode(){

document.body.classList.toggle("dark");

}

let text="Web Developer | HTML | CSS | JavaScript";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();
