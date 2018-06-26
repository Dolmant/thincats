// @flow
import React from "react"
import {observer, inject} from "mobx-react"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import MenuBar from "components/menuBar/menuBar"
import ListItem from "@material-ui/core/ListItem"
import "./resources.less"
import resourcesContent from "./resourcesContent"
import type {StoreType} from "types"
import {InjectedComponent} from "store"

type Props = {
};
type InjectedProps = {
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

@inject("store")
@observer
export default class Resources extends InjectedComponent<Props, InjectedProps, State> {
    state = {
        mainHeader: "",
        subHeader: "",
        mainHeaderViewed: [""],
        subHeaderViewed: [""],
    }
    // todo separate out borrower/investor content
    // todo customize switch to theme colours and put label on both sides
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
                    this.setState({subHeader: name, mainHeader: mainName}, () => {
                        // this.props.store.pushAnchor(name.replace(new RegExp(" ", "g"), "_").toLowerCase())
                        const ele = document.querySelector(`#${name.replace(new RegExp(" ", "g"), "_").toLowerCase()}`)
                        if (ele) {
                            ele.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            })
                        }
                    })
                }}
            >
                <div>
                    {`> ${name}` /* {`${index + 1}. ${name}`}*/}
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

        const HeaderWrap = ({mainHead, subHead, children}) => (
            <div>
                <h1>{mainHead}</h1>
                {children}
            </div>
        )

        if (resourcesContent[mainHeader] && resourcesContent[mainHeader][subHeader]) {
            return (
                <HeaderWrap mainHead={mainHeader} subHead={subHeader}>
                    {Object.keys(resourcesContent[mainHeader]).map(key => resourcesContent[mainHeader][key])}
                </HeaderWrap>
            )
        }
        const mainHeaderTemp = Object.keys(resourcesContent)[0]
        return (
            <HeaderWrap mainHead={mainHeaderTemp} subHead={Object.keys(resourcesContent[mainHeaderTemp])[0]}>
                {Object.keys(resourcesContent[mainHeaderTemp]).map(key => resourcesContent[mainHeaderTemp][key])}
            </HeaderWrap>
        )
    }

    render() {
        return (
            <div className="resources">
                <MenuBar investorSelector />
                <Grid container spacing="12">
                    <Grid className="resourceNav" item xs={4} md={2}>
                        {this.props.store.investor ?
                            <h2 className="resourceTitle">{"About Lending"}</h2>
                            :
                            <h2 className="resourceTitle">{"About Borrowing"}</h2>
                        }
                        <List className="paddingTop1">
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
