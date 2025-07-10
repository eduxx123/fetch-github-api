const user = {
    avatarUrl: '',
    avatarName: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    events: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.avatarName = gitHubUser.userName
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepostories(repositories){
        this.repositories = repositories
    },
    setEvents(events){
        this.events = events
    }
}


export { user }