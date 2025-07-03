import { buscarDados } from "./services/user.js"
import { buscarRepositorios } from "./services/repositories.js"
import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

// BUSCANDO A FOTO DE PERFIL, NOME E BIO DA API E ADICIONANDO-OS NO HTML
async function criarHtml(userName) {

    const userResponse = await buscarDados(userName)

    // CÓDIGO PARA VERIFICAR SE O USUÁRIO DIGITOU UM NOME VÁLIDO
    if(userResponse.message === 'Not Found'){
        screen.renderNotFound()
        return
    }

    const repositoriesResponse = await buscarRepositorios(userName)
    
    user.setInfo(userResponse)  
    user.setRepostories(repositoriesResponse)

    screen.renderUser(user)
    
}

// CRIANDO EVENTO DE CLICK NO BOTÃO
let button = document.getElementById('btn-search').addEventListener('click', () => {
    let userName = document.getElementById('input-search').value
    
    if(validateEmptyInput(userName)) return
    criarHtml(userName)
})

// CRIANDO EVENTO DE ESCUTADOR NA TECLA ENTER
let input = document.getElementById('input-search').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        let userName = event.target.value
        if(validateEmptyInput(userName)) return
        criarHtml(userName)
        
    }
})

// CRIANDO UMA FUNÇÃO PARA VERIFICAR SE O CAMPO FOI PREENCHIDO
function validateEmptyInput(userName){
    if(userName.length === 0){
        alert('Preencha o campo com o nome do usuário do Github :(')
        return true
    }
}


