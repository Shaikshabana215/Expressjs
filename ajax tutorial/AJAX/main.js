document.getElementById("button1").addEventListener('click',loadUser);

function loadUser(){
var xhr = new XMLHttpRequest();
xhr.open('GET','user.json',true)

xhr.onload = function(){
    if(this.status ==200){
        console.log(this.responseText);
    }
}


xhr.send();
}