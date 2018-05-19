// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import Menu from "components/menu/menu"
import ListItem from "@material-ui/core/ListItem"
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
        const MainHeader = (name, index, children) => (
            <List open>
                <ListItem>
                    <div disabled>
                        {`${name}`}
                    </div>
                </ListItem>
                {children}
            </List>
        )
        const SubHeader = (name, index) => (
            <ListItem>
                <div>
                    {`${index}. ${name}`}
                </div>
            </ListItem>
        )
        return Object.entries(resourcesContent).map(([mainHeaderKey, mainHeaderValue], index) => MainHeader(
            mainHeaderKey,
            index,
            Object.entries(mainHeaderValue).map(([subHeaderKey, content], index) => {
                return (
                    SubHeader(subHeaderKey, index)
                )
            })))
    }
    renderResourceContent = () => {
        const {mainHeader, subHeader} = this.state
        if (resourcesContent[mainHeader] && resourcesContent[mainHeader][subHeader]) {
            // todo markdown render
            return resourcesContent[mainHeader][subHeader]
        }
        const mainHeaderValue = resourcesContent[Object.entries(resourcesContent)[0][0]]
        const subHeaderValue = mainHeaderValue[Object.entries(mainHeaderValue)[0][0]]
        // todo markdown render
        return subHeaderValue
    }
    render() {
        return (
            <div className="resources">
                <Menu />
                <Grid container spacing="12">
                    <Grid item xs={4}>
                        {this.renderResourceMenu()}
                    </Grid>
                    <Grid item xs={8}>
                        <div className="resourceContent">
                            {this.renderResourceContent()}
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
