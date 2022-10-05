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
    console.log(Object.values(visor));
    console.log(visor);
    
}

function modoEscuro(){
    // document.getElementsByTagName('main').style.backgroundColor = "black";
    document.body.style.backgroundColor = "red";
}