var visor = document.getElementById('visor');

function discar(tecla){
    visor.value += tecla;
}

function limpar(){
    visor.value = " ";
}

function porcentagem(){
    var visor1 = visor.value;
    var num1 = Number(visor1.substring(0, visor1.indexOf("%")));
    var num2 = Number(visor1.substring(visor1.indexOf("%")+1, visor1.length));
    var res = (num1 * num2)/100;

    visor.value = `${res}`;
}

function somar(){
    var visor1 = visor.value;
    var num1 = Number(visor1.substring(0, visor1.indexOf("+")));
    var num2 = Number(visor1.substring(visor1.indexOf("+")+1, visor1.length));
    var res = num1 + num2;

    visor.value = `${res}`;
}

function subtrair(){
    var visor1 = visor.value;
    var num1 = Number(visor1.substring(0, visor1.indexOf("-")));
    var num2 = Number(visor1.substring(visor1.indexOf("-")+1, visor1.length));
    var res = num1 - num2;

    visor.value = `${res}`;
}

function multi(){
    var visor1 = visor.value;
    var num1 = Number(visor1.substring(0, visor1.indexOf("x")));
    var num2 = Number(visor1.substring(visor1.indexOf("x")+1, visor1.length));
    var res = num1 * num2;

    visor.value = `${res}`;
}

function dividir(){
    var visor1 = visor.value;
    var num1 = Number(visor1.substring(0, visor1.indexOf("/")));
    var num2 = Number(visor1.substring(visor1.indexOf("/")+1, visor1.length));
    var res = num1 / num2;

    visor.value = `${res}`;
}

function igual(){
    var visor1 = visor.value;
    if(visor1.includes("-")){
        subtrair();
    } else if(visor1.includes("+")){
        somar();
    } else if(visor1.includes("x")){
        multi();
    } else if(visor1.includes("/")){
        dividir();
    } else if (visor1.includes("%")){
        porcentagem();
    }
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