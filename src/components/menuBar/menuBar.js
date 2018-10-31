// @flow
import React from "react"
import Menu from "components/menu/menu"
import { observer, inject } from "mobx-react"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import "./menuBar.less"
import type { StoreType } from "types"
import { InjectedComponent } from "store"

type Props = {
  investorSelector: boolean
}
type State = {}
type InjectedProps = {
  store: StoreType
}

@inject("store")
@observer
export default class MenuBar extends InjectedComponent<
Props,
InjectedProps,
State
> {
  render() {
    // const borrowerClasses = classNames({
    //     borrower: true,
    //     selected: !this.props.store.investor,
    // })

    // const investorClasses = classNames({
    //     investor: true,
    //     selected: this.props.store.investor,
    // })

    return (
      <div className="menuBar">
        <Grid container className="justifyBetween">
          <Hidden mdDown>
            <Grid item xs={0} md={3} className="marginTopRight">
              <div
                onClick={() => this.props.store.navHome()}
                className={this.props.store.isHome ? "logoLeft none" : "logoLeft"}
              />
            </Grid>
          </Hidden>
          <Grid item xs={12} md={6}>
            <Grid container justify="center">
              <Menu>{this.props.children}</Menu>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3} className="switcherContainer" />
        </Grid>
      </div>
    )
  }
}

// {/* <Hidden smDown>
// {this.props.investorSelector ?
//     [
//         <Switch
//             checked={this.props.store.investor}
//             className="switcher"
//             onChange={() => this.props.store.toggleInvestor()}
//             value="checkedA"
//             // color="primary"
//         />,
//         <Grid container>
//             <Grid item xs={6}>
//                 <Paper className={borrowerClasses}>{"Borrower"}</Paper>
//             </Grid>
//             <Grid item xs={6}>
//                 <Paper className={investorClasses}>{"Investor"}</Paper>
//             </Grid>
//         </Grid>
//     ]
//     :
//     null
// }
// </Hidden> */}
