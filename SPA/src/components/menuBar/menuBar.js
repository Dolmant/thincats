// @flow
import React from "react"
import Menu from "components/menu/menu"
import {observer, inject} from "mobx-react"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import Paper from "@material-ui/core/Paper"
import "./menuBar.less"
import Switch from "@material-ui/core/Switch"
import classNames from "util/classNames"
import type {StoreType} from "types"
import {InjectedComponent} from "store"

type Props = {
    investorSelector: boolean,
    selectionChild: () => any, // null or jsx element
};
type State = {
};
type InjectedProps = {
    store: StoreType,
};

@inject("store")
@observer
export default class MenuBar extends InjectedComponent<Props, InjectedProps, State> {
    render() {
        const borrowerClasses = classNames({
            borrower: true,
            selected: !this.props.store.investor,
        })

        const investorClasses = classNames({
            investor: true,
            selected: this.props.store.investor,
        })

        return (
            <div className="menuBar">
                <Grid container className="justifyBetween">
                    <Grid item xs={3}>
                        <Hidden smDown>
                            <div onClick={() => this.props.store.navHome()} className="logoLeft" />
                        </Hidden>
                        <Hidden mdUp>
                            {this.props.selectionChild()}
                        </Hidden>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container justify="center">
                            <Menu />
                        </Grid>
                    </Grid>
                    <Grid item xs={3} className="switcherContainer">
                        <Hidden smDown>
                            {this.props.investorSelector ?
                                [
                                    <Switch
                                        checked={this.props.store.investor}
                                        className="switcher"
                                        onChange={() => this.props.store.toggleInvestor()}
                                        value="checkedA"
                                        // color="primary"
                                    />,
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Paper className={borrowerClasses}>{"Borrower"}</Paper>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Paper className={investorClasses}>{"Investor"}</Paper>
                                        </Grid>
                                    </Grid>
                                ]
                                :
                                null
                            }
                        </Hidden>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
