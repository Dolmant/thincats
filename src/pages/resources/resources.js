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
import "./resources.less"
import resourcesContentImport from "./resourcesContent"

type resourcesContentType = {
  [string]: any
}

type Props = {}
type InjectedProps = {
  store: StoreType
}

type State = {
  mainHeader: string,
  subHeader: string,
  mainHeaderViewed: Array<string>,
  subHeaderViewed: Array<string>
}

const snake_to_caps = title => {
  return title
    .split("_")
    .map(item => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ")
}

@inject("store")
@observer
export default class Resources extends InjectedComponent<
  Props,
  InjectedProps,
  State
> {
  state = {
    mainHeader: "",
    subHeader: ""
  }

  componentDidMount() {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth"
    })
    if (window.location.hash) {
      this.setState({
        mainHeader: decodeURIComponent(window.location.hash.slice(1))
      })
    }
  }

  renderResourceContent = resourcesContent => {
    const { mainHeader, subHeader } = this.props.store

    const HeaderWrap = ({ mainHead, children }) => (
      <div>
        <h1>{snake_to_caps(mainHead)}</h1>
        {children}
      </div>
    )

    const mainHeaderValidated = resourcesContent[mainHeader]
      ? mainHeader
      : Object.keys(resourcesContent)[0]
    const subHeaderValidated =
      resourcesContent[mainHeaderValidated] &&
      (resourcesContent[mainHeaderValidated][subHeader]
        ? subHeader
        : Object.keys(resourcesContent[mainHeaderValidated])[0])

    return (
      <HeaderWrap mainHead={mainHeaderValidated}>
        {resourcesContent[mainHeaderValidated][subHeaderValidated]}
      </HeaderWrap>
    )
  }

  render() {
    resourcesContentImport.bind(this)
    const resourcesContent = resourcesContentImport(this.props.store)
    resourcesContent.lending.key_statistics =
      resourcesContent.borrowing.key_statistics

    return (
      <div className="resources">
        <Grid className="homeMenu" item xs={12}>
          <MenuBar />
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <div className="resourceContent">
              {this.renderResourceContent(resourcesContent)}
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}
