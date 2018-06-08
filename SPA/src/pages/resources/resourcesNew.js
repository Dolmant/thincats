// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListSubheader from "@material-ui/core/ListSubheader"
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
        const MainHeader = (name, index, children) => {
            return ([
                <ListSubheader>
                    <div disabled>
                        {`${name}`}
                    </div>
                </ListSubheader>,
                children,
            ])
        }
        // Todo click should trigger navigation to the anchor
        const SubHeader = (name, mainName, index) => (
            <ListItem button onClick={() => { this.setState({subHeader: name, mainHeader: mainName}) }}>
                <div>
                    {`${index + 1}. ${name}`}
                </div>
            </ListItem>
        )
        return Object.entries(resourcesContent).map(([mainHeaderKey, mainHeaderValue], index) => MainHeader(
            mainHeaderKey,
            index,
            Object.entries(mainHeaderValue).map(([subHeaderKey, content], index) => {
                return (
                    SubHeader(subHeaderKey, mainHeaderKey, index)
                )
            })))
    }
    renderResourceContent = () => {
        const {mainHeader, subHeader} = this.state

        const headerWrap = (mainHeader, subHeader, children) => {
            return (
                <div>
                    <h1>{mainHeader}</h1>
                    <h1>{subHeader}</h1>
                    {children}
                </div>
            )
        }

        if (resourcesContent[mainHeader] && resourcesContent[mainHeader][subHeader]) {
            return (
                <headerWrap mainHeader={mainHeader} subHeader={subHeader}>
                    {Object.keys(resourcesContent[mainHeader]).map((key) => resourcesContent[mainHeader][key])}
                </headerWrap>
            )
        }
        const mainHeaderValue = resourcesContent[Object.entries(resourcesContent)[0][0]]
        const subHeaderValue = mainHeaderValue[Object.entries(mainHeaderValue)[0][0]]
        return (
            <headerWrap mainHeader={Object.entries(resourcesContent)[0][0]} subHeader={Object.entries(mainHeaderValue)[0][0]}>
                {subHeaderValue}
            </headerWrap>
        )
    }
    render() {
        return (
            <div className="resources">
                <Menu />
                <Grid container spacing="12">
                    <Grid item xs={4} md={2}>
                        <List>
                            {this.renderResourceMenu()}
                        </List>
                    </Grid>
                    <Grid item xs={8} md={10}>
                        <div className="resourceContent">
                            {this.renderResourceContent()}
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
