
let cores = ['Red','Blue','Green','Brown','White','aqua','chocolate','crimson']
let controlador = 'Red'
let cont = 1

function mudar(){
    let indice = Math.floor(Math.random() * (7 - 0 + 1) + 0)
    let fundo = document.getElementById('fundo')
    let cor_nome = document.getElementById('cor')
    //let botao = document.querySelector('button#btn')

    
    if(controlador != cores[indice]){
        fundo.style.backgroundColor = cores[indice]
        cor_nome.innerHTML = cores[indice]
        controlador = cores[indice]
    }else{
        while(controlador == cores[indice]){
            indice = Math.floor(Math.random() * (7 - 0 + 1) + 0)
        }
        fundo.style.backgroundColor = cores[indice]
        cor_nome.innerHTML = cores[indice]
        controlador = cores[indice]
    }
   
    let contador = document.getElementById('contador')
    contador.innerHTML = cont++
    
    //botao.style.backgroundColor= cores[indice]
}