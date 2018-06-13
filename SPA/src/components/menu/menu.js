// @flow
import React from "react"
import {observer, inject} from "mobx-react"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer"
import InfoIcon from "@material-ui/icons/Info"
import HomeIcon from "@material-ui/icons/Home"
import Grid from "@material-ui/core/Grid"
import SvgIcon from "@material-ui/core/SvgIcon"
import "./menu.less"
import type {StoreType} from "store"

type Props = {
    store: StoreType,
};

@inject("store")
@observer
export default class Menu extends React.Component<Props> {
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
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <BottomNavigation
                            value={value}
                            onChange={this.handleChange}
                            showLabels
                            className="navRoot"
                        >
                            <BottomNavigationAction
                                className="navAction"
                                label="Home"
                                icon={<HomeIcon />}
                                onClick={() => this.props.store.navHome()}
                            />
                            <BottomNavigationAction
                                label="Resources"
                                className="navAction"
                                icon={<SvgIcon ><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z" /></SvgIcon>}
                                onClick={() => this.props.store.navResources()}
                            />
                            <BottomNavigationAction
                                className="navAction"
                                label="News"
                                icon={<InfoIcon />}
                                onClick={() => this.props.store.navNews()}
                            />
                            <BottomNavigationAction
                                className="navAction"
                                label="FAQ"
                                icon={<QuestionAnswerIcon />}
                                onClick={() => this.props.store.navFAQ()}
                            />
                        </BottomNavigation>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
