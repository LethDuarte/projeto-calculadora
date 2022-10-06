var visor = document.getElementById('visor');

function discar(tecla){
    visor.innerHTML += tecla;
}

function limpar(){
    visor.innerHTML = " ";
}

function parenteses(){
    alert(visor);
}

function igual(){
    var resultado = parseInt(visor.value);
    console.log(resultado);
}

function modoEscuro(){
    document.body.style.backgroundColor = "#332E33";
    document.getElementById('titulo').style.color = "white";
    document.getElementById('visor').style.backgroundColor = "#454A4D";
    document.getElementById('visor').style.color = "white";
}

function modoClaro(){
    document.body.style.backgroundColor = "#f5dde0";
    document.getElementById('titulo').style.color = "black";
    document.getElementById('visor').style.backgroundColor = "white";
    document.getElementById('visor').style.color = "black";
}