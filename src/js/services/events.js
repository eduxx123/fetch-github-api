import { baseUrl, eventsQuantity } from "../variables.js";

// BUSCANDO OS ULTIMOS EVENTOS DO USUÁRIO NA API DO GITHUB
async function lastEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventsQuantity}`)
    return await response.json()
}

export { lastEvents }

