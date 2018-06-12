// @flow
import React from "react"
import {observer, inject} from "mobx-react"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import Menu from "components/menu/menu"
import ListItem from "@material-ui/core/ListItem"
import "./resources.less"
import resourcesContent from "./resourcesContent"
import type {StoreType} from "store"

type Props = {
    store: StoreType,
};

// Here state is going to be a new store
// the main store is going to update this store whenever the URL changes to help mark a sub/main header
type State = {
    mainHeader: string,
    subHeader: string,
    mainHeaderViewed: Array<string>,
    subHeaderViewed: Array<string>,
};

// todo
// sudheaders UNDER main header in a dropdown
// anchors on the different levels. Should do dispatch nav, dispatch anchor
@inject("store")
@observer
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
            <ExpansionPanel className="noMargin">
                <ExpansionPanelSummary>
                    <ListItem className="heading">
                        <div>
                            {`${name}`}
                        </div>
                    </ListItem>
                </ExpansionPanelSummary >
                <ExpansionPanelDetails>
                    <div>
                        {children}
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
        // Todo click should trigger navigation to the anchor
        const SubHeader = (name, mainName, index) => (
            <ListItem
                className="subItem"
                button
                onClick={() => {
                    this.setState({subHeader: name, mainHeader: mainName}, () => { this.props.store.pushAnchor(name.replace(new RegExp(" ", "g"), "_").toLowerCase()) })
                }}
            >
                <div>
                    {`${name}` /*{`${index + 1}. ${name}`}*/}
                </div>
            </ListItem>
        )
        return Object.entries(resourcesContent).map(([mainHeaderKey, mainHeaderValue], mainIndex) => MainHeader(
            mainHeaderKey,
            mainIndex,
            Object.entries(mainHeaderValue).map(([subHeaderKey, content], subIndex) => (
                SubHeader(subHeaderKey, mainHeaderKey, subIndex)
            ))))
    }
    renderResourceContent = () => {
        const {mainHeader, subHeader} = this.state

        const headerWrap = (mainHead, subHead, children) => (
            <div>
                <h1>{mainHead}</h1>
                <h2>{subHead}</h2>
                {children}
            </div>
        )

        if (resourcesContent[mainHeader] && resourcesContent[mainHeader][subHeader]) {
            return (
                <headerWrap mainHeader={mainHeader} subHeader={subHeader}>
                    {Object.keys(resourcesContent[mainHeader]).map(key => resourcesContent[mainHeader][key])}
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
                <div className="thincatsCorner" />
                <Menu />
                <Grid container spacing="12">
                    <Grid className="resourceNav" item xs={4} md={2}>
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
