export type StoreType = {
    URL: string,
    replaceURL: (string) => {},
    pushURL: (string) => {},
    navHome: () => {},
    navLending: (string) => {},
    navBorrowing: (string) => {},
    navAboutUs: (string) => {},
    navHowItWorks: () => {},
    navResources: () => {},
    playOnce: () => {},
    loaded: boolean,
    pushAnchor: (string) => {},
}
