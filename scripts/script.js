var visor = document.getElementById('visor');
// var visor1 = visor.value;

//document.getElementById('visor').value = "visor";

function discar(tecla){
    visor.value += tecla;
}

function limpar(){
    visor.value = " ";
}

function parenteses(){
    alert(visor);
}

// function somar(){
//     var sum = visor.value;
//     visor.value = sum;
// }

function igual(){
    // var resultado = parseInt(visor.value);
    // console.log(resultado);
    var res = Number.parseFloat(visor.value);
    visor.value = res;

    console.log(typeof res);
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