
// DOM
let el = document.querySelector(".text-container");
let texto = document.querySelector("#palabra");
let input = document.querySelector("#input");
let msj = document.querySelector(".msj");
let puntosEl = document.querySelector("#puntos");
let estado = document.querySelector(".estado");
let restart = document.querySelector(".restart");
let btnStar = document.querySelector(".start");
let timer = document.querySelector("#timer");

//user Stats
let userStats = document.querySelector(".user-stats");
let tiempo = document.querySelector("#tiempo");
let aciertos = document.querySelector("#aciertos");



// Array Words

const words = [
    'panza',
    'camaron',
    'pinchipon',
    'azucar',
    'telefono',
    'piano',
    'videojuegos',
    'axe de chocolate',
    'gato',
    'a la gilada ni cabida',
    'pirianopolis',
    'disney',
    'altoke perro',
    'teclado',
    'monitor',
    'auriculares',
    'campera',
    'kulungele',
    'camavinga',
    'makelele',
    'cubo',
    'tita',
    'fernet',
    'messi',
    'campeon',
    'el mejor del mundo',
    'lewandwski comela',
    'asado',
    'mate',
    'dulce de leche',
    'pitusas',
    'alfajor',
    'el bicho siuuuuuu'
];

let puntos = 0;

var intervalo;

var duration;


input.disabled = true;

restart.style.display = "none";

input.addEventListener("keypress", (e)=>{
    if (e.key == "Enter") {
        seguir = verifyWord();
        if (s > 4 || !seguir) {
            clearInterval(duration);
            userStats.innerHTML +='<div class="user-stats-data"><p id="tiempo">'+min+':'+sec+'</p><p id="aciertos">'+puntos+'</p></div>';
            texto.innerHTML="";
            input.disabled = true;
            clearInterval(intervalo);
            restart.style.display = "block";
            btnStar.style.display = "none";
            s= 0;
            timer.innerHTML = s;
        }
        else{
            randomWord(words);
            s =0;
            timer.innerHTML = s;
        }
        // if (seguir) {
        //     randomWord(words); 
        // }else{
        //     userStats.innerHTML +='<div class="user-stats-data"><p id="tiempo">'+min+':'+sec+'</p><p id="aciertos">'+puntos+'</p></div>';
        //     texto.innerHTML="";
        //     input.disabled = true;
        //     clearInterval(intervalo);
        //     restart.style.display = "block";
        //     btnStar.style.display = "none";
        // }
        
    }
});


restart.addEventListener("click", ()=>{
    min ='00';
    sec = '00';
    input.disabled = false;
    puntosEl.innerHTML= 0;
    puntos = 0;
    estado.removeChild(estado.childNodes[0]);
    randomWord(words);
    input.focus();
    intervalo = setInterval(() => {startClock()}, 1000);
    duration = setInterval(()=>{
        s++;
        timer.innerHTML = s;
        if (s > 4) {
            clearInterval(duration);
            userStats.innerHTML +='<div class="user-stats-data"><p id="tiempo">'+min+':'+sec+'</p><p id="aciertos">'+puntos+'</p></div>';
            texto.innerHTML="";
            input.disabled = true;
            clearInterval(intervalo);
            restart.style.display = "block";
            btnStar.style.display = "none";
            s= 0;
            timer.innerHTML = s;
        }
    }, 1000);

    restart.style.display = "none";
});


btnStar.addEventListener("click", () =>{
    randomWord(words);
    input.disabled = false;
    input.focus();
    intervalo = setInterval(() => {startClock()}, 1000);
    btnStar.disabled = true;
    duration = setInterval(()=>{
        s++;
        timer.innerHTML = s;
        if (s > 4) {
            clearInterval(duration);
            userStats.innerHTML +='<div class="user-stats-data"><p id="tiempo">'+min+':'+sec+'</p><p id="aciertos">'+puntos+'</p></div>';
            texto.innerHTML="";
            input.disabled = true;
            clearInterval(intervalo);
            restart.style.display = "block";
            btnStar.style.display = "none";
            s= 0;
            timer.innerHTML = s;
        }
    }, 1000);
});


let s = 0;


// CRONOMETRO

let sec = '00';
let min = '00';


let p = document.querySelector("#prueba");


function startClock(){
    
    sec++;
    
    if(sec < 10 ){
        sec = '0'+sec;
        
    }

    if(sec > 59){
        sec = '00';
        min++;

        if (min < 10) {
            min = '0' + min;
        }
    }

    if(min > 59){
        min = '00';   
    }

}


//


//


function randomWord(words){
    let randomIndex =  Math.floor(Math.random() * words.length);
    let word = words[randomIndex];
    texto.innerHTML = word;
}


function verifyWord(){
    let textCont = texto.textContent;
    let p = document.createElement("p");

    if (textCont == input.value && input.value != "") {
        puntos++;
        puntosEl.textContent = puntos;     
        p.textContent="Perfecto!";
        p.classList.add("bien");
        if (estado.children.length > 0) {
            estado.replaceChild(p, estado.children[0]);
        }
        else{
            estado.appendChild(p) 
        }
        
        res = true;
    }
    else{
        puntosEl.innerHTML = puntos;
        p.textContent="Mal!";
        p.classList.add("mal");
        if (estado.children.length > 0) {
            estado.replaceChild(p, estado.children[0]);
        }
        else{
            estado.appendChild(p) 
        }
        res = false;    
    }
    input.value ="";
    return res;
}







