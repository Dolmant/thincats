// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import Menu from "components/menu/menu"
import "./resources.less"
import resourcesContent from "./resourcesContent"

type Props = {
    URL: string
};

// Here state is going to be a new store
// the main store is going to update this store whenever the URL changes to help mark a sub/main header
type State = {
    mainHeader: string,
    subHeader: string,
    mainHeaderViewed: Array<string>,
    subHeaderViewed: Array<string>,
};

export default class Resources extends React.Component<Props, State> {
    state = {
        mainHeader: "",
        subHeader: "",
        mainHeaderViewed: [""],
        subHeaderViewed: [""],
    }

    renderResourceMenu = () => {
        // build these components
        const MainHeader = (name, index) => {}
        const SubHeader = (name, index) => {}
        return Object.entries(resourcesContent).map(([mainHeaderKey, mainHeaderValue], index) => {
            return MainHeader(
                Object.entries(mainHeaderValue).map(([subHeaderKey, content], index) => {
                    return (
                        SubHeader(subHeaderKey, index)
                    )
                }), index)
        })
    }
    renderResourceContent = () => {
        const {mainHeader, subHeader} = this.state
        if (resourcesContent[mainHeader] && resourcesContent[mainHeader][subHeader]) {
            return resourcesContent[mainHeader][subHeader]
        }
        const mainHeaderValue = resourcesContent[Object.entries(resourcesContent)[0][0]]
        const subHeaderValue = mainHeaderValue[Object.entries(mainHeaderValue)[0][0]]
        return subHeaderValue
    }
    render() {
        return (
            <div className="resources">
                <Menu />
                <Grid container spacing="12">
                    <Grid item xs={4}>
                        <div className="menus" />
                    </Grid>
                    <Grid item xs={8}>
                        <div className="spacing for content">
                            {this.renderResourceContent()}
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
