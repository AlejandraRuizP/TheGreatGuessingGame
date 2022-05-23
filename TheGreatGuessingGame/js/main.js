let boxs=document.querySelectorAll(".square");
let message=document.querySelector("#message");
let colors=generateRandomColor();
let colorDisplay=document.querySelector("#colorDisplay");
let pickedColor=colors[pickColor(6)];
colorDisplay.innerHTML=pickedColor;

function asignar(array,colores){
    for(i=0; i<array.length; i++){
        array[i].style.backgroundColor=colores[i];
            array[i].addEventListener("click", function(e){
                let clickedColor=e.target.style.backgroundColor;
                    if(pickedColor==clickedColor){
                        elements();
                        changeColors(clickedColor);
                    }else{
                        e.target.style.backgroundColor="#232323";
                        message.innerHTML="Intenta de nuevo";
                    }
            })
    }
}
asignar(boxs,colors); 
function elements(){
    message.innerHTML="Ganaste";
    document.querySelector("#foto").style.display="inline";
    document.querySelector("#play").style.display="none";
    document.querySelector("#hard").value="Play Again";
    document.querySelector("#easy").style.display="none";
    document.querySelector("#play2").style.display="none";
}
function changeColors(color){
    document.querySelector(".tittle").style.backgroundColor=color;
    for(i=0; i<boxs.length; i++){
        boxs[i].style.backgroundColor=color;
    }
}
function pickColor(numero){
    return Math.ceil(Math.random()*numero-1).toFixed(0);
}
function gRgb(){//randomColor
    return "rgb("+pickColor(255)+", "+pickColor(255)+", "+pickColor(255)+")";
}
function generateRandomColor(){//auto
        return [gRgb(),gRgb(),gRgb(),gRgb(),gRgb(),gRgb()];
}
function generateRandomColor2(){//easy
    return [gRgb(),gRgb(),gRgb()];
}
function easy(){
    colors=generateRandomColor2();
    asignar(boxs,colors); 
    pickedColor=colors[pickColor(3)];
    colorDisplay.innerHTML=pickedColor;
}
//-----------
document.querySelector("#play").addEventListener("click", function(){
   colors=generateRandomColor();
   asignar(boxs,colors); 
   pickedColor=colors[pickColor(6)];
   colorDisplay.innerHTML=pickedColor;
})
document.querySelector("#play2").addEventListener("click", function(){
    easy();
 })
document.querySelector("#easy").addEventListener("click", function(){
    for(i=3; i<=5; i++){
        boxs[i].style.display="none";
    }
    easy();
    document.querySelector("#play2").style.display="inline";
    document.querySelector("#play").style.display="none";
    document.querySelector("#easy").classList.add("selected");
    document.querySelector("#hard").classList.remove("selected");
})
document.querySelector("#hard").addEventListener("click", function(){
    document.querySelector("#easy").classList.remove("selected");
    document.querySelector("#hard").classList.add("selected");
    location.reload();
})

