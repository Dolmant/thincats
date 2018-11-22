// @flow
import React from "react"
import { observer, inject } from "mobx-react"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"
import Toc from "@material-ui/icons/Toc"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import MenuBar from "components/menuBar/menuBar"
import type { StoreType } from "types"
import { InjectedComponent } from "store"
import "./../resources/resources.less"

type Props = {}
type InjectedProps = {
  store: StoreType
}

type State = {}

@inject("store")
@observer
export default class PlatformWelcome extends InjectedComponent<
Props,
InjectedProps,
State
> {
  state = {}
  componentDidMount() {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth"
    })
  }
  render() {
    return (
      <div className="resources">
        <Grid className="homeMenu" item xs={12}>
          <MenuBar />
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <div className="resourceContent">
              <div>
                <h2>{"Welcome to the new Thincats platform!"}</h2>
                <div id="documents" className="subHeading">
                  <p>
                    {
                      "Thincats recently launched a new lending platform, if you had an account prior to the launch we have provided a user guide you can download below:"
                    }
                  </p>
                  <a
                    href="/assets/LenderGuide.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Platform User Guide for Lenders
                  </a>
                  <br />
                  <div style={{ fontSize: "2rem", textAlign: "center" }}>
                    {/* <a
                      style={{ fontSize: "2rem", textAlign: "center" }}
                      href="https://investor.thincats.com.au"
                    >
                      {"Log in here"}
                    </a> */}
                    <Button
                      variant="raised"
                      color="primary"
                      onClick={() => {
                        var win = window.open(
                          "https://investor.thincats.com.au/",
                          "_blank"
                        )
                        if (win) {
                          //Browser has allowed it to be opened
                          win.focus()
                        } else {
                          //Browser has blocked it
                          alert("Please allow popups for this website")
                        }
                      }}
                    >
                      {"Log In"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}
