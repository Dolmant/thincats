// @flow
import {configure, observable, action} from "mobx"

configure({enforceActions: true})

const URLGenerator = () =>
    // window.history.replaceState({}, 'Home', '/');
    window.location.pathname

export type StoreType = {
    URL: string,
    replaceURL: (string) => {},
    pushURL: (string) => {},
    navHome: (string) => {},
    pushAnchor: (string) => {},
}

class Store {
    @observable URL = URLGenerator()

    @action
    replaceURL = (URL: string) => {
        window.history.replaceState({}, "", URL)
        this.URL = URL
    }

    @action
    pushURL = (URL: string) => {
        window.history.pushState({}, "", URL)
        this.URL = URL
    }

    @action
    pushAnchor = (anchor: string) => {
        const hash = this.URL.split("#")
        if (hash.length === 2) {
            window.location.hash = `#${anchor}`
            this.URL = `${hash[0]}#${anchor}`
            window.history.pushState({}, "", this.URL)
        } else if (hash.length === 1) {
            window.location.hash = `#${anchor}`
            this.URL = `${hash[0]}#${anchor}`
            window.history.pushState({}, "", this.URL)
        }
    }

    @action
    navHome = () => {
        window.history.pushState({}, "Home", "/")
        this.URL = "/"
    }

    // @observable githubProjects = []
    // @observable state = "pending"

    // fetchProjects = flow(function* fetcher() { // <- note the star, this a generator function!
    //     this.githubProjects = []
    //     this.state = "pending"
    //     try {
    //         const projects = yield fetchGithubProjectsSomehow() // yield instead of await
    //         const filteredProjects = somePreprocessing(projects)
    //         // the asynchronous blocks will automatically be wrapped actions and can modify state
    //         this.state = "done"
    //         this.githubProjects = filteredProjects
    //     } catch (error) {
    //         this.state = "error"
    //     }
    // })
}

export default new Store()
