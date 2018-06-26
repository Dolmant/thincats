// @flow
import React from "react"
import Menu from "components/menu/menu"
import {observer, inject} from "mobx-react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import "./menuBar.less"
import Switch from "@material-ui/core/Switch"
import classNames from "util/classNames"
import type {StoreType} from "types"
import {InjectedComponent} from "store"

type Props = {
    investorSelector: boolean,
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
                        <div onClick={() => this.props.store.navHome()} className="logoLeft" />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container justify="center">
                            <Menu />
                        </Grid>
                    </Grid>
                    {this.props.investorSelector ?
                        <Grid item xs={3} className="switcherContainer">
                            <Switch
                                checked={this.props.store.investor}
                                className="switcher"
                                onChange={() => this.props.store.toggleInvestor()}
                                value="checkedA"
                                // color="primary"
                            />
                            <Grid container>
                                <Grid item xs={6}>
                                    <Paper className={borrowerClasses}>{"Borrower"}</Paper>
                                </Grid>
                                <Grid item xs={6}>
                                    <Paper className={investorClasses}>{"Investor"}</Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                        :
                        <Grid item xs={3} className="switcherContainer" />
                    }
                </Grid>
            </div>
        )
    }
}
