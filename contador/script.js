function contar() {
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados...')
    } else {
        res.innerHTML = 'Contando......'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {  // Contagem crecente
            for(let c = 1; c <= f; c += p) {
                res.innerHTML += `${c}  \u{1F449}`	
            }
        } else {   //Contagem decrecente
            for(let c = 1; c >= f; c -= p) {
                res.innerHTML += `${c}  \u{1F449}`	
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}