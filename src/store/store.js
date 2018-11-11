// @flow
import { configure, observable, action, computed } from "mobx"
import React from "react"

configure({ enforceActions: "observed" })

const URLGenerator = () => window.location.pathname
const getHeader = () => {
  const endpoint = window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1)
  if (endpoint.lastIndexOf(".") > -1) {
    return endpoint.split(".")[0]
  }
  if (endpoint.lastIndexOf("#") > -1) {
    return endpoint.split(".")[0]
  }
  return endpoint
}
// window.history.replaceState({}, 'Home', '/');

export class InjectedComponent<
  Props,
  InjectedProps,
  State = void
  > extends React.Component<Props, State> {
  state: State
  props: Props & InjectedProps
}

class Store {
  @observable
  mainHeader = getHeader()

  @observable
  subHeader = getHeader()

  @observable
  timer = setInterval(this.progress, 75)

  @observable
  URL = URLGenerator()

  @observable
  loaded = false

  @observable
  progressLoading = 0

  @observable
  investor = false

  @computed
  get isHome(): boolean {
    return this.URL.startsWith("/home") || this.URL === "/"
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
      this.timer = null
    }
    this.progressLoading = 0
    this.timer = setInterval(this.progress, 150)
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
  navHowItWorks = () => {
    this.mainHeader = "how_it_works"
    this.subHeader = "how_it_works"
    this.URL = "/how_it_works"
    window.history.pushState({}, "How It Works", this.URL)
    this.resetProgress()
  }
  @action
  navLending = (subHeader) => {
    this.mainHeader = "lending"
    this.subHeader = subHeader
    this.URL = "/lending"
    window.history.pushState({}, "Lending", this.URL)
    this.resetProgress()
  }
  @action
  navBorrowing = (subHeader) => {
    this.mainHeader = "borrowing"
    this.subHeader = subHeader
    this.URL = "/borrowing"
    window.history.pushState({}, "Borrowing", this.URL)
    this.resetProgress()
  }
  @action
  navSponsors = () => {
    this.mainHeader = "sponsors"
    this.subHeader = "sponsors"
    this.URL = "/sponsors"
    window.history.pushState({}, "Sponsors", this.URL)
    this.resetProgress()
  }
  @action
  navAboutUs = (subHeader) => {
    this.mainHeader = "about_us"
    this.subHeader = subHeader
    this.URL = "/about_us"
    window.history.pushState({}, "AboutUs", this.URL)
    this.resetProgress()
  }
  @action
  navResources = () => {
    this.mainHeader = "resources"
    this.subHeader = "resources"
    this.URL = "/resources"
    window.history.pushState({}, "Resources", this.URL)
    this.resetProgress()
  }
}

export default new Store()
