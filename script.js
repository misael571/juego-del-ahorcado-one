let tablero = document.getElementById("juego").getContext("2d");
let botonNuevoJuego = document.getElementById("nuevoJuego").style.display = "none";
let botonDesistir = document.getElementById("abandonarJuego").style.display = "none";
let botontexto = document.getElementById("nuevaPalabra").style.display = "none";
let botonGuardar = document.getElementById("guardar").style.display = "none";
let botonCancelar = document.getElementById("cancelar").style.display = "none";

let palabras = ["ALURA","HTML","JAVASCRIPT","ONE","ORACLE","CSS"];
let palabraSecreta = "";
let letras = [];
let errores = 8;
let letrasCorrectas = [];

function selecionarPalabra(){
    let palabra= palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
}

function verificarLetraClicada(key) {
    if (letras.length < 1 || letras.indexOf(key) < 0) {
      letras.push(key)
      return false
      
    }
    else {
      letras.push(key)
      return true
    }
  }
function anadirLetraIncorrecta(){
    errores -= 1;
}

function verificarLetra(keyCode) {
    if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
}

function anadirLetraCorrecta(letra){
  letrasCorrectas.push(letra); 
}

function verificaSiGano(){
    if(palabraSecreta.length === letrasCorrectas.length){
      ganaste();
    }
}

function gameOver(){
   if(errores < 0){
      finJuego();
   }
}

nuevoJuego.addEventListener("click", function(){
  location.reload();
});

abandonarJuego.addEventListener("click", function(){
  location.reload();
});

cancelar.addEventListener("click", function(){
  location.reload();
});

guardar.addEventListener("click", function(){
  agregarPalabra();
});


function agregarPalabra(){
    document.getElementById("inicarDesaparece").style.display = "none";
    document.getElementById("agregarDesaparece").style.display = "none";
    
    document.getElementById("nuevaPalabra").style.display = "block";
    document.getElementById("guardar").style.display = "block";
    document.getElementById("cancelar").style.display = "block";
    let palabraNueva =document.getElementById("nuevaPalabra").value;

    if(palabraNueva !== "" ){
      palabras.push(palabraNueva);
      alert("La palabra se agrego correctamente");
      document.getElementById("nuevaPalabra").style.display = "none";
      document.getElementById("guardar").style.display = "none";
      document.getElementById("cancelar").style.display = "none";

      iniciarJuego()
    }
}


function iniciarJuego(){
    document.getElementById("inicarDesaparece").style.display = "none";
    document.getElementById("agregarDesaparece").style.display = "none";

    selecionarPalabra();
    dibujarCanvas();
    dibujarLIneas();

    document.getElementById("nuevoJuego").style.display = "block";
    document.getElementById("abandonarJuego").style.display = "block";

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();
        if (errores >= 0 ){
          if (!verificarLetraClicada(e.key) && verificarLetra(e.keyCode)){
              if(palabraSecreta.includes(letra)){
                  for(let i = 0; i < palabraSecreta.length; i++){
                      if(palabraSecreta[i] === letra){
                          escribirLetraCorrecta(i);
                          anadirLetraCorrecta(letra);
                          verificaSiGano();                                                    
                      }
                  }
              }else{
                  dibujarhorca(errores);
                  anadirLetraIncorrecta();
                  escribirLetraIncorrecta(letra,errores);
                  gameOver();
              }
          }
        }else{
          alert("alcanso el numero de intentos");
        }
        
    }

}

