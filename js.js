

// DOM
let el = document.querySelector(".text-container");
let texto = document.querySelector("#palabra");
let input = document.querySelector("#input");
let msj = document.querySelector(".msj");
let puntosEl = document.querySelector("#puntos");
let estado = document.querySelector(".estado");
let btn = document.querySelector(".btn");

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

btn.addEventListener("click", ()=>{
    puntosEl.innerHTML= 0;
    puntos = 0;
    estado.innerHTML="";
    randomWord(words);
})

randomWord(words);


input.addEventListener("keypress", (e)=>{
    if (e.key == "Enter") {
        verifyWord();
        randomWord(words)
    }
})


function randomWord(words){
    let randomIndex =  Math.floor(Math.random() * words.length);
    let word = words[randomIndex];
    texto.innerHTML = word;
}


function verifyWord(){
    let textCont = texto.textContent;
    let p = document.createElement("p");

    if (textCont == input.value) {
        puntosEl.innerHTML = puntos++;     
        p.textContent="Perfecto!";
        p.classList.add("bien");
        if (estado.children.length > 0) {
            estado.replaceChild(p, estado.children[0]);
        }
        else{
            estado.appendChild(p) 
        }
          
    }
    else{
        p.textContent="Mal!";
        p.classList.add("mal");
        if (estado.children.length > 0) {
            estado.replaceChild(p, estado.children[0]);
        }
        else{
            estado.appendChild(p) 
        }    
    }
    input.value ="";
}





