const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudos");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo")
            textos[j].classList.remove("ativo")
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo")
    }

}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-06-31T00:00:00");
const tempoObjetivo2 = new Date("2024-12-31T00:00:00");
const tempoObjetivo3 = new Date("2024-12-31T00:00:00");
const tempoObjetivo4 = new Date("2024-12-31T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];


function calcula(tempoObjetivo){
    let tempo = new Date();
    let tempofinal = tempoObjetivo - tempo;
    let segundos = Math.floor(tempofinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);
    
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if(tempofinal > 0){
        return [dias,horas,minutos,segundos];
    } else {
        return [0,0,0,0];
    }

}
function atualiza(){

    
    for (let i=0; i<contadores.length;i++) {
        document.getElementById("dias"+i).textContent = calcula(tempos[i])[0];
        document.getElementById("horas"+i).textContent = calcula(tempos[i])[1];
        document.getElementById("min"+i).textContent = calcula(tempos[i])[2];
        document.getElementById("seg"+i).textContent = calcula(tempos[i])[3];
        console.log("seg"+i);

    }
}    

function comeca(){
        atualiza();
        setInterval(atualiza,1000);
}

comeca();
