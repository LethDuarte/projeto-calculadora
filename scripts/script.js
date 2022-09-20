function discar(){
    var visor = document.getElementById('visor');
    var tec = document.getElementsByClassName('tec');
    var exibirtec = toString(tec.value);

    visor.innerHTML += exibirtec;
}