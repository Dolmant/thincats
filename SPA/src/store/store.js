// @flow
import {
    configure,
    observable,
    action,
    computed,
} from "mobx"
import React from "react"

configure({enforceActions: true})

const URLGenerator = () => window.location.pathname
// window.history.replaceState({}, 'Home', '/');

export class InjectedComponent<Props, InjectedProps, State = void> extends React.Component<Props, State> {
    state: State;
    props: Props & InjectedProps;
}

class Store {
    @observable timer = setInterval(this.progress, 150)

    @observable URL = URLGenerator()

    @observable loaded = false

    @observable progressLoading = 0

    @observable investor = false

    @computed get isHome(): boolean {
        return this.URL.startsWith("/home") || this.URL === "/"
    }

    @computed get isResources(): boolean {
        return this.URL.startsWith("/resources")
    }

    @computed get isFAQ(): boolean {
        return this.URL.startsWith("/faq")
    }

    @action
    progress = () => {
        if (this.progressLoading < 100) {
            const diff = Math.random() * 20
            this.progressLoading = Math.min(this.progressLoading + diff, 100)
        } else {
            clearInterval(this.timer)
            this.timer = 0
        }
    }

    @action
    playOnce = () => {
        this.loaded = true
    }

    @action
    resetProgress = () => {
        if (this.timer) {
            clearInterval(this.timer)
            this.timer = 0
        }
        this.progressLoading = 0
        this.timer = setInterval(this.progress, 150)
    }

    @action
    toggleInvestor = () => {
        this.investor = !this.investor
    }

    @action
    replaceURL = (URL: string) => {
        if (URL.startsWith("/")) {
            this.URL = URL
            window.history.replaceState({}, "", this.URL)
            this.resetProgress()
        } else {
            console.log(`URL error, give URL without origin e.g. /resources: ${URL}`)
        }
    }

    @action
    pushURL = (URL: string) => {
        if (URL.startsWith("/")) {
            this.URL = URL
            window.history.pushState({}, "", this.URL)
            this.resetProgress()
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
        this.resetProgress()
        return null
    }

    @action
    navHome = () => {
        this.URL = "/"
        window.history.pushState({}, "Home", this.URL)
        this.resetProgress()
    }

    @action
    navResources = () => {
        this.URL = "/resources"
        window.history.pushState({}, "Resources", this.URL)
        this.resetProgress()
    }

    @action
    navFAQ = () => {
        this.URL = "/faq"
        window.history.pushState({}, "FAQ", this.URL)
        this.resetProgress()
    }
}

export default new Store()
