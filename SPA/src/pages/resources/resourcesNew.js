// @flow
import React from "react"
import {observer, inject} from "mobx-react"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"
import Toc from "@material-ui/icons/Toc"
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

type State = {
    mobileOpen: boolean,
    mainHeader: string,
    subHeader: string,
    mainHeaderViewed: Array<string>,
    subHeaderViewed: Array<string>,
};

@inject("store")
@observer
export default class Resources extends InjectedComponent<Props, InjectedProps, State> {
    state = {
        mobileOpen: false,
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
        // const borrowerClasses = classNames({
        //     borrower: true,
        //     selected: !this.props.store.investor,
        // })

        // const investorClasses = classNames({
        //     investor: true,
        //     selected: this.props.store.investor,
        // })

        // <Hidden mdUp>
        //     <div className="switcherContainer">
        //         <Switch
        //             checked={this.props.store.investor}
        //             className="switcher"
        //             onChange={() => this.props.store.toggleInvestor()}
        //             value="checkedA"
        //             // color="primary"
        //         />
        //         <Grid container>
        //             <Grid item xs={6}>
        //                 <Paper className={borrowerClasses}>{"Borrower"}</Paper>
        //             </Grid>
        //             <Grid item xs={6}>
        //                 <Paper className={investorClasses}>{"Investor"}</Paper>
        //             </Grid>
        //         </Grid>
        //     </div>
        // </Hidden>,
        const baseDrawer = () => ([
            <div>{this.props.store.investor ?
                <h1 className="resourceTitle">{"Thincats Resources"}</h1>
                :
                <h1 className="resourceTitle">{"Thincats Resources"}</h1>
            }</div>,
            <List className="paddingTop1">
                {this.renderResourceMenu()}
            </List>
        ])

        const responsiveDrawers = () =>
            ([
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor="left"
                        open={this.state.mobileOpen}
                        onClose={() => this.setState({mobileOpen: false})}
                        classes={{
                            paper: "tempPaper",
                        }}
                        className="tempDrawer resourceNav"
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {baseDrawer()}
                    </Drawer>
                </Hidden>,
                <Hidden smDown implementation="css">
                    <Drawer
                        variant="permanent"
                        open
                        anchor="left"
                        className="permDrawer resourceNav"
                        classes={{
                            paper: "permPaper",
                        }}
                    >
                        {baseDrawer()}
                    </Drawer>
                </Hidden>
            ])

        const mobileButton = () => (
            <Button onClick={() => this.setState({mobileOpen: !this.state.mobileOpen})} variant="fab" color="primary" aria-label="add">
                <Toc />
            </Button>
        )
        return (
            <div className="resources">
                <MenuBar
                    investorSelector
                    selectionChild={mobileButton}
                />
                <Grid container>
                    <Grid item xs={12} md={2}>
                        {responsiveDrawers()}
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <div className="resourceContent">
                            {this.renderResourceContent()}
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
