
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

            if ( i < f ){
                //contagem crescente
                for (let c = i; c <= f; c += p ) {
                res.innerHTML += `${c}`;
                }

            } else {
                //contagem regressiva
                for (let c = i; c >= f; c -= p) {
                    res.innerHTML += `${c}`
                    
                }

            
        }
    }
}
