/*
function contador(){

    var inicio =parseInt(document.getElementById('anici').value);
    var fim = parseInt(document.getElementById('fi').value);
    var resul = parseInt(document.getElementById('resu').value);
    var res = document.getElementById('resposta')
       
        if(inicio.value.length ==0 ||fimvalue.length ==0 ||resulvalue.length ==0) {
            window.alert('[erro] digite um número!')
        } else{
            res.innerHTML='contando:'
             for (let c = inicio; c <= fim; c += resul){
             res.innerHTML = `${c} `
        }
    }

}



function contador() {
    var inicio = parseInt(document.getElementById('anici').value);
    var fim = parseInt(document.getElementById('fi').value);
    var resul = parseInt(document.getElementById('resu').value);
    var res = document.getElementById('resposta');

    if (isNaN(inicio) || isNaN(fim) || isNaN(resul)) {
        window.alert('[erro] Digite números válidos!');
    } else {
        for (let c = inicio; c <= fim; c += resul) {
            res.innerHTML += `[${c}] `;
        }
    }
}
*/

function contador(){
    
    var inicio =  document.getElementById('inici')
    var fim = document.getElementById('fi')
    var passo = document.getElementById('resu')
    var res = document.getElementById('resposta')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Falta dados!')
    } else {
            res.innerHTML=`contando:` 

            var i = Number(inicio.value)
            var f = Number(fim.value)
            var p = Number(passo.value)

            for (let c = i; c < f; c += p ) {
            res.innerHTML += `${[c]}`;
       }
    }
}
