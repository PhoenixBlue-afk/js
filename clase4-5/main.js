
/*let lona = {
    tipo: "Lona",
    peso : 550,
    valor : 1100,
    tramaje: "Cerrado"
}
let microPerforado = {
    tipo: "Micro Perforado",
    peso : 350,
    valor : 1500,
    tramaje: "Entre Abierto"
}
let rafia = {
    tipo: "Rafia",
    peso : 200,
    valor : 700,
    tramaje: "Cerrado"
}
let mediaSombra = {
    tipo: "Media Sombra",
    peso : 250,
    valor : 800,
    tramaje: "Entre Abierto"
}
let pvc = {
    tipo: "PVC Cristal",
    peso : 400,
    valor : 1200,
    tramaje: "Cerrado"
}*/



function Telas() {
    let telas = document.getElementById("telas");
    let tela = telas.options[telas.selectedIndex].text;
    document.getElementById('x').innerText = `Ud. ha seleccionado : ${tela}.`
}
let valor 
let ancho = document.getElementById ('ancho');
let Re = document.getElementById ('Re');
ancho.addEventListener ('keypress', Medida1);
console.log (Re);

function Medida1(e) {
     R.textContent = e.target.value
}


//let largo = document.getElementById ("largo");


function calu(ancho, largo) {
    let metrosCuadrados = ancho * largo;

}

if (Telas == "Lona") {
    valor = 1100;

}else if (Telas == "Rafia"){
    
}else if (Telas == "Rafia"){
    
}else if (Telas == "Rafia"){
    
}else if (Telas == "Rafia"){
    
}
