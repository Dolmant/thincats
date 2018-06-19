// @flow
import {configure, observable, action, computed} from "mobx"
import React from "react"

configure({enforceActions: true})

const URLGenerator = () =>
    // window.history.replaceState({}, 'Home', '/');
    window.location.pathname

export class InjectedComponent<Props, InjectedProps, State = void> extends React.Component<Props, State> {
    state: State;
    props: Props & InjectedProps;
}

class Store {
    @observable URL = URLGenerator()
    @observable loaded = false

    @computed get isHome(): boolean {
        return this.URL.startsWith("/home") || this.URL === "/"
    }
    @computed get isResources(): boolean {
        return this.URL.startsWith("/resources")
    }
    @computed get isNews(): boolean {
        return this.URL.startsWith("/news")
    }
    @computed get isFAQ(): boolean {
        return this.URL.startsWith("/faq")
    }
    @computed get isAbout(): boolean {
        return this.URL.startsWith("/about")
    }
    @computed get isContactUs(): boolean {
        return this.URL.startsWith("/contactus")
    }
    @computed get isOurTeam(): boolean {
        return this.URL.startsWith("/ourteam")
    }

    @action
    playOnce = () => {
        this.loaded = true
    }

    @action
    replaceURL = (URL: string) => {
        if (URL.startsWith("/")) {
            this.URL = URL
            window.history.replaceState({}, "", this.URL)
        } else {
            console.log(`URL error, give URL without origin e.g. /resources: ${URL}`)
        }
    }

    @action
    pushURL = (URL: string) => {
        if (URL.startsWith("/")) {
            this.URL = URL
            window.history.pushState({}, "", this.URL)
        } else {
            console.log(`URL error, give URL without origin e.g. /resources: ${URL}`)
        }
    }

    @action
    pushAnchor = (anchor: string) => {
        const hash = this.URL.split("#")
        if (hash.length > 2 || hash.length === 0) {
            console.log(`Hash error, tried to split: ${this.URL}`)
            return null
        }
        window.location.hash = `#${anchor}`
        this.URL = `${hash[0]}#${anchor}`
        window.history.pushState({}, "", this.URL)
        return null
    }

    @action
    navHome = () => {
        this.URL = "/"
        window.history.pushState({}, "Home", this.URL)
    }

    @action
    navResources = () => {
        this.URL = "/resources"
        window.history.pushState({}, "Resources", this.URL)
    }

    @action
    navNews = () => {
        this.URL = "/news"
        window.history.pushState({}, "News", this.URL)
    }

    @action
    navFAQ = () => {
        this.URL = "/faq"
        window.history.pushState({}, "FAQ", this.URL)
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
