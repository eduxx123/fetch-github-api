const user = {
    avatarUrl: '',
    avatarName: '',
    bio: '',
    userName: '',
    repositories: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.avatarName = gitHubUser.userName
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
    },
    setRepostories(repositories){
        this.repositories = repositories
    }
}

export { user }