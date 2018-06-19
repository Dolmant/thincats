// @flow
import React from "react"
import Menu from "components/menu/menu"
import {observer, inject} from "mobx-react"
import Grid from "@material-ui/core/Grid"
// import Button from "@material-ui/core/Button"
import "./menuBar.less"
import type {StoreType} from "types"
import {InjectedComponent} from "store"

type Props = {
};
type InjectedProps = {
    store: StoreType,
};

@inject("store")
@observer
export default class MenuBar extends InjectedComponent<Props, InjectedProps> {
    render() {
        return (
            <div className="menuBar">
                <Grid container className="justifyBetween">
                    <Grid item xs={3}>
                        <div onClick={() => this.props.store.navHome()} className="logoLeft" />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container justify="center">
                            <Menu />
                        </Grid>
                    </Grid>
                    <Grid item xs={3} className="loginButtons">
                        {/* <Button variant="raised" color="primary">
                            Login
                        </Button>
                        <Button variant="raised" color="primary">
                            Register
                        </Button> */}
                    </Grid>
                </Grid>
            </div>
        )
    }
}
