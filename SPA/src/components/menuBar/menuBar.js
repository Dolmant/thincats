// @flow
import React from "react"
import Menu from "components/menu/menu"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import "./menuBar.less"
import type {StoreType} from "store"

type Props = {
    store: StoreType,
};

export default class MenuBar extends React.Component<Props> {
    render() {
        return (
            <div className="menuBar">
                <Grid container justify="space-around">
                    <Grid item>
                        <div className="logo" />
                    </Grid>
                    <Grid item>
                        <Menu />
                    </Grid>
                    <Grid item className="loginButtons">
                        <Button variant="raised" color="primary">
                            Login
                        </Button>
                        <Button variant="raised" color="primary">
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
