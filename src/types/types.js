export type StoreType = {
    URL: string,
    replaceURL: (string) => {},
    pushURL: (string) => {},
    navHome: () => {},
    navResources: () => {},
    navResourcesLender: () => {},
    navResourcesBorrower: () => {},
    navNews: () => {},
    navFAQ: () => {},
    playOnce: () => {},
    toggleInvestor: () => {},
    loaded: boolean,
    investor: boolean,
    isHome: boolean,
    isResources: boolean,
    isNews: boolean,
    isFAQ: boolean,
    isAbout: boolean,
    isContactUs: boolean,
    isOurTeam: boolean,
    pushAnchor: (string) => {},
}