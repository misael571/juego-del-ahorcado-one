function dibujarCanvas(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    tablero.fillRect(0,0,1200,800);
    tablero.beginPath();
    tablero.moveTo(650,400);
    tablero.lineTo(900,400);
    tablero.stroke();
    tablero.closePath();
}

function dibujarLIneas(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle ="#0A3871";

    let anchura = 600/palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++){

        tablero.moveTo(500 + (anchura*i), 540);
        tablero.lineTo(550 + (anchura*i), 540);

    }
    tablero.stroke();
    tablero.closePath();
}

 function escribirLetraCorrecta(indice){
    tablero.font = 'bold 52px Inter';
    tablero.lineWidth=6;
    tablero.lineCap="round";
    tablero.lineJoin="round";
    tablero.fillStyle="#0A3871";
    let anchura = 600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[indice],505+(anchura*indice),520)
    tablero.stroke();
 }

 function escribirLetraIncorrecta(letra,error){
    tablero.font = "bold 40px Inter";
    tablero.lineWidth= 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";
    tablero.fillText(letra,505+(40*(10-error)),620,40);
 }

 function dibujarhorca(intentos){
    tablero.lineWidth = 9;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle ="#0A3871";
    if(intentos === 8){
        tablero.moveTo(675,400);
        tablero.lineTo(675,100);
    }
    if(intentos === 7){
        tablero.moveTo(675,100);
        tablero.lineTo(790,100);
    }
    if(intentos === 6){
        tablero.moveTo(790,100);
        tablero.lineTo(790,160);
    }
    if(intentos === 5){
        tablero.moveTo(820,190);
        tablero.arc(790,190,30,0,Math.PI*2);
    }
    if(intentos === 4){
        tablero.moveTo(790,220);
        tablero.lineTo(790,320);
    }
    if(intentos === 3){
        tablero.moveTo(790,240);
        tablero.lineTo(765,290);
    }
    if(intentos === 2){
        tablero.moveTo(790,240);
        tablero.lineTo(815,290);        
    }
    if(intentos === 1){
        tablero.moveTo(790,320);
        tablero.lineTo(765,370);
    }
    if(intentos === 0){
        tablero.moveTo(790,320);
        tablero.lineTo(815,370);
    }
    tablero.stroke();
    tablero.closePath();
 }

 function finJuego(){
    tablero.font = 'bold 46px Inter';
    tablero.lineWidth=6;
    tablero.lineCap="round";
    tablero.lineJoin="round";
    tablero.fillStyle="#0A3871";
    tablero.fillText("!Fin de Juego¡",890,240)
    tablero.stroke();
 }

 function ganaste(){
    tablero.font = 'bold 44px Inter';
    tablero.lineWidth=6;
    tablero.lineCap="round";
    tablero.lineJoin="round";
    tablero.fillStyle="#0A3871";
    tablero.fillText("!Felicidades ",890,240);
    tablero.fillText("Ganaste¡",920,290)
    tablero.stroke();
    setTimeout(recargar, 1000);
 }
 function recargar(){
    location.reload(); 
  }

