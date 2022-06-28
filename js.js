setInterval(mostrarNaTela, 1);

function mostrarNaTela() {
    let workspace = document.querySelector(".horaAtual");
    workspace.innerHTML = "";

    const horaAtual = pegarHoras();

    workspace.innerHTML += horaAtual;
}

function pegarHoras() {
    //  Pega as horas:minutos:segundos atual
    const time = new Date();
    let HH = time.getHours();
    let MM = time.getMinutes();
    let SS = time.getSeconds();

    const formatTime = formatarHoras(HH, MM, SS);
    return formatTime;
}

function formatarHoras(HH, MM, SS) {
    //  Pega as var e as deixam com duas casas
    //  Função chamada pela f pegarHoras()
    let fHH = HH.toFixed();
    let fMM = MM.toFixed();
    let fSS = SS.toFixed();

    if (fHH.length < 2) {
        fHH = '0' + fHH;
    }

    if (fMM.length < 2) {
        fMM = '0' + fMM;
    }

    if (fSS.length < 2) {
        fSS = '0' + fSS;
    }

    const formatTime = `${fHH}:${fMM}:${fSS}`;
    return formatTime;
}

function cronometroSelecionado() {
    const horaAtualNavSelected = document.querySelector(".horaAtual");
    const boxFunction = document.querySelector(".box-function");
    const buttonSelected = document.querySelector(".nav .cronometro");
    const info = document.querySelector(".box-function .cronometro");

    conferirSelecao();

    horaAtualNavSelected.classList.toggle("horaAtualNavSelected");
    boxFunction.classList.toggle("none");
    buttonSelected.classList.toggle("buttonSelected");
    info.classList.toggle("none");
}

function conferirSelecao() {
    const info = document.querySelectorAll(".box-function div");
    for (let i = 0; i < info.length; i ++) {
        if (info[i].classList.contains("none")) {
            info[i].classList.add("none");
        }
    }
}