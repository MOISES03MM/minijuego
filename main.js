// inicializacion de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let Movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let timerinicial = 30;
let tiempoRegresivoid = null;

//apuntando a documento html
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('tiempos restantes');

//generacion de numeros aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);
//var td1=document.getElementById("cero");
//td1.addEventListener("click",destapar);

//funciones 
function contartiempo(){
   tiempoRegresivoid = setInterval(()=>{
        timer--;
    mostrarTiempo.innerHTML = `tiempo: ${timer} segundos`; 
    if(timer == 0){
        clearInterval(tiempoRegresivoid);
        bloqueartarjetas();
    }
    },1000);
}

function bloqueartarjetas(){
    for(let i =0; i<=15; i++){
    let tarjertabloqueada = document.getElementById(i);
    tarjertabloqueada.innerHTML = numeros[i];
    tarjertabloqueada.disabled = true;
  }
}

// funcion principal
function destapar(id){

if(temporizador == false){
    contartiempo();
    temporizador = true;
}

    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);

    if(tarjetasDestapadas == 1){
        // mostrar primer numero
        tarjeta1 = document.getElementById(id);
        tarjeta1.style="font-size:35px;";
        primerResultado = numeros[id];
        tarjeta1.innerHTML = primerResultado;
        
        //deshabilitar primer boton
        tarjeta1.disabled = true;
    }else if(tarjetasDestapadas ==2){
        //mostrar segundo numero
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = segundoResultado;

        //deshabilitar el segundo boton
        tarjeta2.disabled = true;

        //incrementar movimientos
        Movimientos++;
        mostrarMovimientos.innerHTML =  `Movimiento: ${Movimientos}`;

        if(primerResultado == segundoResultado){
            //encerrar contador de tarjetas destapadas
            tarjetasDestapadas = 0;

            //Aumentar aciertos 
            aciertos++;
            mostrarAciertos.innerHTML =  `aciertos: ${aciertos} `;

            if(aciertos ==8){
                clearInterval(tiempoRegresivoid);
              mostrarAciertos.innerHTML = `aciertos: ${aciertos} &#128527;`; 
              mostrarTiempo.innerHTML = `Fantastico ✨ solo tardaste ${timerinicial - timer} segundos` 
              mostrarMovimientos.innerHTML = ` Movimiento: ${Movimientos}&#128521;`;
            }

        }else{
            // mostrar momentaneamente valores y volver a tapar
            setTimeout(()=>{
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            },800);
        }
    }

} 
