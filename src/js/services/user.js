import { baseUrl } from "../variables.js"

// BUSCANDO NOMES NA API EXTERNA DO GITHUB 
async function buscarDados(userName) {
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
}

export { buscarDados }