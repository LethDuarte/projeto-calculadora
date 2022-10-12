var visor = document.getElementById('visor');

function discar(tecla){
    visor.value += tecla;
}

function limpar(){
    visor.value = " ";
}

function parenteses(){
    alert(visor);
}

function somar(){
    // var itens = [];
    // itens.push(visor.value);
    visor.innerText = " ";
    //itens.splice(0,0, visor.value);
    
    //itens.unshift(visor.value);
    //itens[0]= visor.value;
    //visor.innerHTML = " ";
    // itens[itens.length] = visor.value;
    
    //console.log(itens);
}

function igual(){
    var visor1 = visor.value;

    if(visor1.includes("-")){
        var num1 = Number(visor1.substring(0, visor1.indexOf("-")));
        var num2 = Number(visor1.substring(visor1.indexOf("-")+1, visor1.length));
        var res = num1 - num2;

        visor1 = " ";
        console.log(res);
    }

    //console.log(typeof visor.value);
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