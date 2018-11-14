// @flow
import React from "react"
import { observer, inject } from "mobx-react"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ListItem from "@material-ui/core/ListItem"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import Grid from "@material-ui/core/Grid"
import type { StoreType } from "types"
import { InjectedComponent } from "store"
import Hidden from "@material-ui/core/Hidden"
import "./menuBar.less"

type Props = {}
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
  state = {
    anchorEl: null,
    openLending: false,
    openBorrowing: false,
    openAboutUs: false
  }

  renderMenus() {
    return (
      <div>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.openLending}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "bottom", horizontal: "center" }}
          getContentAnchorEl={null}
          onClose={() => this.setState({ openLending: false, anchorEl: null })}
        >
          <MenuItem
            onClick={() => {
              this.setState({ openLending: false })
              this.props.store.navLending("about_lending")
            }}
          >
            About Lending
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.setState({ openLending: false })
              this.props.store.navLending("key_statistics")
            }}
          >
            Key Statistics
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.setState({ openLending: false })
              this.props.store.navLending("lending_faq")
            }}
          >
            Lending FAQ
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.setState({ openLending: false })
              this.props.store.navLending("risks")
            }}
          >
            What are the Risks?
          </MenuItem>
          <MenuItem
            onClick={() => {
              window.location = "/assets/TCA-Membership-Agreement-May16.pdf"
            }}
          >
            Membership Agreement
          </MenuItem>
          <MenuItem
            onClick={() => {
              window.location =
                "/assets/TCA-Member-Application-Form-April-2018.docx"
            }}
          >
            Member Application Form
          </MenuItem>
        </Menu>
        <Menu
          id="simple-menu"
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "bottom", horizontal: "center" }}
          anchorEl={this.state.anchorEl}
          getContentAnchorEl={null}
          open={this.state.openBorrowing}
          onClose={() =>
            this.setState({ openBorrowing: false, anchorEl: null })
          }
        >
          <MenuItem
            onClick={() => {
              this.setState({ openBorrowing: false })
              this.props.store.navBorrowing("about_borrowing")
            }}
          >
            About Borrowing
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.setState({ openBorrowing: false })
              this.props.store.navBorrowing("key_statistics")
            }}
          >
            Key Statistics
          </MenuItem>
          <MenuItem
            onClick={() => {
              window.location = "https://borrower.thincats.com.au"
            }}
          >
            Apply for a loan
          </MenuItem>
        </Menu>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "bottom", horizontal: "center" }}
          getContentAnchorEl={null}
          open={this.state.openAboutUs}
          onClose={() => this.setState({ openAboutUs: false, anchorEl: null })}
        >
          <MenuItem
            onClick={() => {
              this.setState({ openAboutUs: false })
              this.props.store.navAboutUs("about_us")
            }}
          >
            About Thincats
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.setState({ openAboutUs: false })
              this.props.store.navAboutUs("our_team")
            }}
          >
            Our Team
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.setState({ openAboutUs: false })
              this.props.store.navAboutUs("contact_us")
            }}
          >
            Contact Us
          </MenuItem>
          <MenuItem
            onClick={() => {
              window.location = "/assets/TCA-Privacy-Policy-v1.1.pdf"
            }}
          >
            Privacy Policy
          </MenuItem>
        </Menu>
      </div>
    )
  }

  renderMobileMenus() {
    const scroller = () => {
      const targetScroll = document.querySelector(".menuBar")
      if (targetScroll && targetScroll.clientHeight) {
        window.scrollTo({
          left: 0,
          top: targetScroll.clientHeight,
          behavior: "smooth"
        })
      }
    }

    const lendingMenu = () => (
      <ExpansionPanel className="noMargin">
        <ExpansionPanelSummary>
          <ListItem className="heading">
            <div>Lending</div>
          </ListItem>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <ListItem
              onClick={() => {
                this.props.store.navLending("about_lending")
                scroller()
              }}
              className="heading"
            >
              <div>About Lending</div>
            </ListItem>
            <ListItem
              onClick={() => {
                this.props.store.navLending("key_statistics")
                scroller()
              }}
              className="heading"
            >
              <div>Key Statistics</div>
            </ListItem>
            <ListItem
              onClick={() => {
                this.props.store.navLending("lending_faq")
                scroller()
              }}
              className="heading"
            >
              <div>Lending FAQ</div>
            </ListItem>
            <ListItem
              onClick={() => {
                this.props.store.navLending("risks")
                scroller()
              }}
              className="heading"
            >
              <div>What are the Risks?</div>
            </ListItem>
            <ListItem
              onClick={() => {
                window.location = "/assets/TCA-Membership-Agreement-May16.pdf"
              }}
              className="heading"
            >
              <div>Membership Agreement</div>
            </ListItem>
            <ListItem
              onClick={() => {
                window.location =
                  "/assets/TCA-Member-Application-Form-April-2018.docx"
              }}
              className="heading"
            >
              <div>Member Application Form</div>
            </ListItem>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
    const borrowingMenu = () => (
      <ExpansionPanel className="noMargin">
        <ExpansionPanelSummary>
          <ListItem className="heading">
            <div>Borrowing</div>
          </ListItem>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <ListItem
              onClick={() => {
                this.props.store.navBorrowing("about_borrowing")
                scroller()
              }}
              className="heading"
            >
              <div>About Borrowing</div>
            </ListItem>
            <ListItem
              onClick={() => {
                this.props.store.navLending("key_statistics")
                scroller()
              }}
              className="heading"
            >
              <div>Key Statistics</div>
            </ListItem>
            <ListItem
              onClick={() => {
                window.location = "https://borrower.thincats.com.au"
              }}
              className="heading"
            >
              <div>Apply for a Loan</div>
            </ListItem>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
    const aboutUsMenu = () => (
      <ExpansionPanel className="noMargin">
        <ExpansionPanelSummary>
          <ListItem className="heading">
            <div>About Us</div>
          </ListItem>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <ListItem
              onClick={() => {
                this.props.store.navAboutUs("about_us")
                scroller()
              }}
              className="heading"
            >
              <div>About Us</div>
            </ListItem>
            <ListItem
              onClick={() => {
                this.props.store.navAboutUs("our_team")
                scroller()
              }}
              className="heading"
            >
              <div>Our Team</div>
            </ListItem>
            <ListItem
              onClick={() => {
                this.props.store.navAboutUs("contact_us")
                scroller()
              }}
              className="heading"
            >
              <div>Contact Us</div>
            </ListItem>
            <ListItem
              onClick={() => {
                window.location = "/assets/TCA-Privacy-Policy-v1.1.pdf"
              }}
              className="heading"
            >
              <div>Privacy Policy</div>
            </ListItem>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
    return (
      <div>
        <ExpansionPanel className="noMargin">
          <ExpansionPanelSummary>
            <ListItem style={{ justifyContent: "center" }} className="heading">
              <div>Menu</div>
            </ListItem>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="flexColumn">
            <ExpansionPanel className="noMargin">
              <ExpansionPanelSummary
                onClick={() => {
                  this.props.store.navHowItWorks()
                  scroller()
                }}
              >
                <ListItem className="heading">
                  <div>How It Works</div>
                </ListItem>
              </ExpansionPanelSummary>
            </ExpansionPanel>
            {lendingMenu()}
            {borrowingMenu()}
            <ExpansionPanel className="noMargin">
              <ExpansionPanelSummary
                onClick={() => {
                  this.props.store.navSponsors()
                  scroller()
                }}
              >
                <ListItem className="heading">
                  <div>Sponsors</div>
                </ListItem>
              </ExpansionPanelSummary>
            </ExpansionPanel>
            {aboutUsMenu()}
            <ExpansionPanel className="noMargin">
              <ExpansionPanelSummary
                onClick={() => {
                  this.props.store.navResources()
                  scroller()
                }}
              >
                <ListItem className="heading">
                  <div>Resources</div>
                </ListItem>
              </ExpansionPanelSummary>
            </ExpansionPanel>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }

  renderNav() {
    return (
      <BottomNavigation showLabels className="navRoot">
        <BottomNavigationAction
          label="Home"
          classes={{ label: "navActionLabel", selected: "selectedLabel" }}
          onClick={() => this.props.store.navHome()}
        />
        <BottomNavigationAction
          label="How It Works"
          classes={{ label: "navActionLabel", selected: "selectedLabel" }}
          onClick={() => this.props.store.navHowItWorks()}
        />
        <BottomNavigationAction
          label="Lending"
          classes={{
            label: "navActionLabel",
            selected: "selectedLabel",
            root: "arrow"
          }}
          onClick={e =>
            this.setState({ openLending: true, anchorEl: e.currentTarget })
          }
        />
        <BottomNavigationAction
          label="Borrowing"
          classes={{
            label: "navActionLabel",
            selected: "selectedLabel",
            root: "arrow"
          }}
          onClick={e =>
            this.setState({ openBorrowing: true, anchorEl: e.currentTarget })
          }
        />
        <BottomNavigationAction
          label="Sponsors"
          classes={{ label: "navActionLabel", selected: "selectedLabel" }}
          onClick={() => this.props.store.navSponsors()}
        />
        <BottomNavigationAction
          label="About Us"
          classes={{
            label: "navActionLabel",
            selected: "selectedLabel",
            root: "arrow"
          }}
          onClick={e =>
            this.setState({ openAboutUs: true, anchorEl: e.currentTarget })
          }
        />
        <BottomNavigationAction
          label="Resources"
          classes={{ label: "navActionLabel", selected: "selectedLabel" }}
          onClick={() => this.props.store.navResources()}
        />
        <BottomNavigationAction
          label="Investor Log In"
          classes={{ label: "navActionLabel", selected: "selectedLabel" }}
          onClick={() => {
            this.props.store.navWelcome()
          }}
        />
        <BottomNavigationAction
          label="Borrower Log In"
          classes={{
            label: "navActionLabel",
            selected: "selectedLabel",
            root: "last"
          }}
          onClick={() => {
            this.props.store.navWelcome()
          }}
        />
      </BottomNavigation>
    )
  }

  render() {
    //todo render the menus based on the json, for now hardcode it with rollover menus

    return (
      <div className="menuBar">
        <Grid container>
          <Grid item xs={12}>
            <Hidden smDown>
              {this.renderMenus()}
              {this.renderNav()}
            </Hidden>
            <Hidden mdUp>{this.renderMobileMenus()}</Hidden>
          </Grid>
        </Grid>
      </div>
    )
  }
}
