// @flow
import React from "react"
import {observer, inject} from "mobx-react"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
// import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer"
// import InfoIcon from "@material-ui/icons/Info"
// import HomeIcon from "@material-ui/icons/Home"
// import SvgIcon from "@material-ui/core/SvgIcon"
import Grid from "@material-ui/core/Grid"
import "./menu.less"
import type {StoreType} from "types"
import {InjectedComponent} from "store"

type Props = {
};
type InjectedProps = {
    store: StoreType,
};

@inject("store")
@observer
export default class Menu extends InjectedComponent<Props, InjectedProps> {
    render() {
        let value
        switch (true) {
        case this.props.store.isHome:
            value = 0
            break
        case this.props.store.isResources:
            value = 1
            break
        case this.props.store.isNews:
            value = 2
            break
        case this.props.store.isFAQ:
            value = 3
            break
        default:
            value = 0
        }

        return (
            <div className="menu">
                <div className="thincatsCorner1" />
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <BottomNavigation
                            value={value}
                            showLabels
                            className="navRoot"
                        >
                            <BottomNavigationAction
                                className="navAction"
                                label="Home"
                                classes={{label: "navActionLabel", selected: "selectedLabel"}}
                                // icon={<HomeIcon />}
                                onClick={() => this.props.store.navHome()}
                            />
                            <BottomNavigationAction
                                label="Resources"
                                className="navAction"
                                classes={{label: "navActionLabel", selected: "selectedLabel"}}
                                // icon={<SvgIcon ><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z" /></SvgIcon>}
                                onClick={() => this.props.store.navResources()}
                            />
                            {/* <BottomNavigationAction
                                className="navAction"
                                label="News"
                                classes={{label: "navActionLabel", selected: "selectedLabel"}}
                                // icon={<InfoIcon />}
                                onClick={() => this.props.store.navNews()}
                            />
                            <BottomNavigationAction
                                className="navAction"
                                label="FAQ"
                                classes={{label: "navActionLabel", selected: "selectedLabel"}}
                                // icon={<QuestionAnswerIcon />}
                                onClick={() => this.props.store.navFAQ()}
                            /> */}
                            <BottomNavigationAction
                                className="navAction"
                                label="Login"
                                classes={{label: "navActionLabel", selected: "selectedLabel"}}
                                // icon={<InfoIcon />}
                                onClick={() => { window.location = "http://13.76.173.109/" }}
                            />
                            <BottomNavigationAction
                                className="navAction"
                                label="Register"
                                classes={{label: "navActionLabel", selected: "selectedLabel"}}
                                // icon={<QuestionAnswerIcon />}
                                onClick={() => { window.location = "http://13.76.173.109/" }}
                            />
                        </BottomNavigation>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
