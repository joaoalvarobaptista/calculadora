let display = document.getElementById('display');
let numero1 = 0;
let numero2 = 0;
let operacao = '';
let ans = 0;


function zero(){
    display.value += 0;
}

function um(){
    display.value += 1;
}

function dois(){
    display.value += 2;
}

function tres(){
    display.value += 3;
}

function quatro(){
    display.value += 4;
}

function cinco(){
    display.value += 5;
}

function seis(){
    display.value += 6;
}

function sete(){
    display.value += 7;
}
function oito(){
    display.value += 8;
}

function nove(){
    display.value += 9;
}

function ponto(){
    display.value += '.';
}

function del(){
    display.value = '';
    display.focus();
}

function answ(){
    display.value = ans;
}

function som(){
    numero1 = Number(display.value);
    operacao = 'soma'; 
    display.value = '';
    display.focus();
}
function sub(){
    numero1 = Number(display.value);
    operacao = 'subtracao'; 
    display.value = '';
    display.focus();
}

function mult(){
    numero1 = Number(display.value);
    operacao = 'produto'; 
    display.value = '';
    display.focus();
}

function div(){
    numero1 = Number(display.value);
    operacao = 'divisao'; 
    display.value = '';
    display.focus();
}



function igual(){
    numero2 = Number(display.value);
    //alert(`${numero1} e ${numero2} e ${adicao(numero1, numero2)}`);
    if (operacao == 'soma'){
        ans = adicao(numero1, numero2);
        display.value = ans;
        numero1 = 0;
        numero2 = 0;
    } else if (operacao == 'subtracao'){
        ans = subtracao(numero1, numero2);
        display.value = ans;
        numero1 = 0;
        numero2 = 0;
    } else if (operacao == 'produto'){
        ans = produto(numero1, numero2);
        display.value = ans;
        numero1 = 0;
        numero2 = 0;
    } else if (operacao == 'divisao'){
        ans = divisao(numero1, numero2);
        display.value = ans;
        numero1 = 0;
        numero2 = 0;
    }   
}


//operacoes
function adicao(a,b){
    return a + b;
}

function subtracao(a,b){
    return a - b;
}

function produto(a, b){
    return a*b;
}

function divisao(a, b){
    return a/b;
}






