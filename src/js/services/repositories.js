import { baseUrl, repositoriesQuantity } from "../variables.js"

// BUSCANDO REPOSITÓRIOS NA API ESTERNA DO GITHUB
async function buscarRepositorios(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
}

export { buscarRepositorios }