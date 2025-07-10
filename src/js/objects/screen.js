const screen = {
    userProfile: document.querySelector('.profile-data'),
    userEvents: document.querySelector('.profile-events'),
    renderUser(user){
        this.userProfile.innerHTML =  `<div class="info">
                            <img src="${user.avatarUrl}" alt ="foto do perfil do usuario" />
                            <div class="data">
                               <h1>${user.name ?? "não possui nome cadastrado 😣"}</h1>
                               <h3>Login: ${user.userName ?? "não possui login cadastrado"} </h3> 
                               <p>${user.bio ?? "não possui bio cadastrada 😣"}</p>
                               <p>👥seguidores: ${user.followers}</p>
                               <p>👥seguindo: ${user.following}</p>
                            </div>
                        </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a> 🍴${repo.forks} 🌟${repo.stargazers_count}
            👀${repo.watchers} 📓${repo.language}</li>`)
       
        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                              <h2>Repositórios</h2>
                                              <ul>${repositoriesItens}</ul>
                                           </div>`
        }
        let eventsItens = ''
        user.events.forEach(item => {
            if(item.type === 'PushEvent'){
                eventsItens += `<li><span>${item.repo.name}</span> -${item.payload.commits[0].message ?? "Sem mensagem de commit"}</li>`
          } else if (item.type === 'CreateEvent'){
                eventsItens += `<li><span>${item.repo.name}</span> -Sem mensagem de commit</li>`
        }
        })

        if (eventsItens){
            this.userEvents.innerHTML = `<div>
                                            <h2>Eventos</h2>
                                            <ul>${eventsItens}</ul>
                                         </div>`
        }else{
            this.userEvents.innerHTML = `<div>
                                            <h2>Eventos</h2>
                                            <h3>Este usuário não possui mensagens de commits recentes 😓</h3>
                                         </div>`
        }
        
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado 😓</h3>"
    }
}


export { screen } 