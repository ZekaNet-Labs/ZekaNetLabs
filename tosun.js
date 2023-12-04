button1= document.getElementById("button1")
button2= document.getElementById("button2")
foto= document.getElementById("foto")
var x=1

button1.addEventListener("click" , function(){
if(x>=1){
--x;
console.log(x)
}

if(x==0){
foto.src = "resimler/handgame2.png";
}
if(x==1){
    foto.src = "resimler/handgame1.png"
}
})

button2.addEventListener("click", function(){
    if(x<=1){
        ++x;
        console.log(x)
    }
    if(x==1){
        foto.src = "resimler/handgame1.png"
    }
    if(x==2){
        foto.src = "resimler/handgame3.png"
    }
})


