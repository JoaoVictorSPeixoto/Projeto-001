let cores = ['1','2','3','4','5','6','7','8','9','A','B','C'
,'D','E','F']
let contador = 0

function mudar(){

    let caixa_cor = document.querySelector('span#cor')
    let fundo = document.getElementById('fundo')
    let cont = document.getElementById('contador')
    let cor = '#'
    contador++
    cont.innerHTML = contador

    

    let num

    for(let i = 0; i < 6; i++){
        num = Math.floor(Math.random() * (14 - 0 + 1) + 0)
        cor += cores[num];
    }
    //alert(`codigo gerado: ${cor}`)
    fundo.style.backgroundColor = cor;

    caixa_cor.innerHTML = cor;



}
