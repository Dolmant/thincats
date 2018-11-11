// @flow
import React from "react"
import { observer, inject } from "mobx-react"
import type { StoreType } from "types"
import { InjectedComponent } from "store"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import Button from "@material-ui/core/Button"
import MenuBar from "components/menuBar/menuBar"
import Slider from "react-slick"
import CountUp, { startAnimation } from "react-countup"
import "./home.less"
import classNames from "util/classNames"
import Light from "assets/icons/LightSymbol.svg"
import PeopleCash from "assets/icons/SymbolPeopleCash.svg"
import Wallet from "assets/icons/SymbolWallet.svg"
import Plant from "assets/icons/SymbolPlant.svg"
import Time from "assets/icons/SymbolTime.svg"
import Bag from "assets/icons/SymbolBag.svg"
import Book from "assets/icons/SymbolBook.svg"
import Chart from "assets/icons/SymbolChart.svg"
import Lock from "assets/icons/SymbolLock.svg"
import MagGlass from "assets/icons/SymbolMagGlass.svg"
import Man from "assets/icons/SymbolMan.svg"
import Medal from "assets/icons/SymbolMedal.svg"
import Shield from "assets/icons/SymbolShield.svg"
import Shoot from "assets/icons/SymbolShoot.svg"
import SVGInline from "react-svg-inline"
import MortgageCalculator from "../../components/calculator/MortgageCalculator";

type Props = {}

type InjectedProps = {
  store: StoreType
}

type State = {
  scrolled: boolean,
  user: number
}

@inject("store")
@observer
export default class Home extends InjectedComponent<
Props,
InjectedProps,
State
> {
  state = {
    user: 0 // investor = 2 and borrower = 1
  }

  // onScroll = () => {
  // startAnimation(this.myCountUp)
  //   window.removeEventListener("scroll", this.onScroll)
  // }

  render() {
    const translateLeft = this.state.user === 2

    const defaultContent = "25%"
    const expandedContent = this.state.user > 0 ? "50%" : defaultContent

    return (
      <div className="homeNew">
        <Grid container className="page1" justify="center">
          <Grid className="homeMenu" item xs={12}>
            <MenuBar />
          </Grid>
          <Grid className="centerpiece" item xs={12}>
            <div id="text">
              <div id="innerText">
                <span className="thin">{"Thin"}</span>
                <p className="cats">{"Cats"}</p>
              </div>
              <div className="slogan">
                <p>{"Connecting growing businesses with sophisticated investors."}</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              justify="center"
              alignContent="center"
              className="seller"
            >
              <Grid className="ticker" item xs={12}>
                <div className="banner">
                  <br />
                  <div className="funded">{"Over"}</div>
                  <br />
                  <div className="static">
                    <CountUp
                      separator=""
                      prefix=""
                      duration={5}
                      start={0}
                      end={100}
                      className="amount-lent"
                      ref={countUp2 => {
                        this.myCountUp2 = countUp2
                      }}
                    />
                  </div>
                  <div className="funded">{"loans"}</div>
                  <br />
                </div>
                <div className="banner">
                  <br />
                  <div className="funded">{"Over"}</div>
                  <br />
                  <div className="static">
                    <CountUp
                      separator=","
                      prefix="$"
                      duration={5}
                      start={0}
                      end={13400000}
                      className="amount-lent"
                      ref={countUp => {
                        this.myCountUp = countUp
                      }}
                    />
                  </div>
                  <div className="funded">{"funded so far!"}</div>
                  <br />
                </div>
                <div className="banner">
                  <br />
                  <div className="funded">{"Over"}</div>
                  <br />
                  <div className="static">
                    <CountUp
                      separator=""
                      prefix=""
                      duration={5}
                      start={0}
                      end={150}
                      className="amount-lent"
                      ref={countUp3 => {
                        this.myCountUp3 = countUp3
                      }}
                    />
                  </div>
                  <div className="funded">{"sophisticated investors"}</div>
                  <br />
                </div>
              </Grid>
              {/* </Hidden> */}
              <Grid item className="buttonContainer" xs={6}>
                <Button
                  variant="raised"
                  color="primary"
                  onClick={() => {
                    var win = window.open(
                      "https://fs27.formsite.com/Thincats/form8/form_login.html", //todo replace all of these links
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
                  {"borrow now >"}
                </Button>
              </Grid>
              <Grid item className="buttonContainer" xs={6}>
                <Button
                  variant="raised"
                  color="primary"
                  onClick={() => {
                    var win = window.open(
                      "https://www.thincats.com.au/register/",
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
                  {"invest now >"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="center" direction="row" className="videos">
          <Grid item>
            <div style={{ textAlign: "center" }}>
              <p>{"How It Works"}</p>
            </div>
            <div className="banner">
              <div
                className="wistia_embed wistia_async_2nc5twt1mz popover=true popoverContent=link wistia_embed_initialized"
                style={{ display: "inline" }}
                id="wistia-2nc5twt1mz-1"
              >
                <div id="wistia_32.thumb_container" className="wistia_click_to_play" style={{ position: "relative", display: "inline" }}>
                  <img src="/assets/videoimage.png" alt="" />
                </div>
              </div>
            </div>
            <div className="banner">
              <div className="applyButtons">
                <Button
                  variant="raised"
                  color="primary"
                  onClick={() => {
                    this.setState({ user: 1 })
                    const $page3 = document.querySelector("#page3") || {}
                    if ($page3) {
                      window.scrollTo({
                        left: 0,
                        top: $page3.getBoundingClientRect().top + document.documentElement.scrollTop,
                        behavior: "smooth"
                      })
                    }
                  }}
                >
                  {"why borrow?"}
                </Button>
                <Button
                  variant="raised"
                  color="primary"
                  onClick={() => {
                    this.setState({ user: 2 })
                    const $page3 = document.querySelector("#page3")
                    if ($page3) {
                      window.scrollTo({
                        left: 0,
                        top: $page3.getBoundingClientRect().top + document.documentElement.scrollTop,
                        behavior: "smooth"
                      })
                    }
                  }}
                >
                  {"why invest?"}
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          id="page3"
          className={translateLeft ? "page3 translateLeft" : "page3"}
        >
          <Grid
            item
            style={{ flexBasis: expandedContent }}
            className="patternBackground"
          >
            <Grid container justify="center">
              <Grid className="containerized" item>
                <Grid
                  container
                  className="padding2em"
                  alignItems="center"
                  direction="column"
                >
                  <Grid item xs={12}>
                    <div className="light topIcon">
                      <SVGInline className="fillWhite light" svg={Light} />
                    </div>
                    <div className="page3Title">
                      {"Why "}
                      <p className="bold">{"ThinCats"}</p>
                      {" is right for "}
                      <p className="bold">{"growing businesses"}</p>
                    </div>
                  </Grid>
                  <Grid item xs={12} className="page3Row">
                    <Grid container className="" direction="row">
                      <Grid className="page3Block " item xs={12} md={6}>
                        {/* Block */}
                        <div className="light icon">
                          <SVGInline className="light" svg={Shoot} />
                        </div>
                        <div className="page3Heading">
                          {"Never miss an opportunity"}
                        </div>
                        <div className="page3Content">
                          {
                            "Get funding for stock, equipment, business acquisitions or your next growth opporunity, with loans from $50,000 to $2million and repayment terms of 2-5 years."
                          }
                        </div>
                      </Grid>
                      <Grid item className="page3Block " xs={12} md={6}>
                        {/* block */}
                        <div className="light icon">
                          <SVGInline className="light" svg={Man} />
                        </div>
                        <div className="page3Heading">
                          {"Real lenders, not institutions"}
                        </div>
                        <div className="page3Content">
                          {
                            "Loan applications are assessed by our community of hundred of investors based on business potential and cash flow performance."
                          }
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className="page3Row">
                    <Grid container className="" direction="row">
                      <Grid item className="page3Block " xs={12} md={6}>
                        {/* block */}
                        <div className="time icon">
                          <SVGInline className="time" svg={Time} />
                        </div>
                        <div className="page3Heading">{"Apply fast"}</div>
                        <div className="page3Content">
                          {
                            "Completely online process where you'll know your eligibility within 48 hours."
                          }
                        </div>
                      </Grid>
                      <Grid item className="page3Block " xs={12} md={6}>
                        {/* block */}
                        <div className="lock icon">
                          <SVGInline className="lock" svg={Lock} />
                        </div>
                        <div className="page3Heading">
                          {"Unrestricted usage"}
                        </div>
                        <div className="page3Content">
                          {
                            "Our loans are general purpose and finance for the long term so that you can spend on anything that will grow your business."
                          }
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className="page3Row">
                    <Grid container className="" direction="row">
                      <Grid item className="page3Block " xs={12} md={6}>
                        {/* block */}
                        <div className="light icon">
                          <SVGInline className="light" svg={Chart} />
                        </div>
                        <div className="page3Heading">
                          {"Build your business case"}
                        </div>
                        <div className="page3Content">
                          {
                            "Shortcut having to learn the nuances of cash flow finance by leaning on our dedicated support team to help you prepare your loan application."
                          }
                        </div>
                      </Grid>
                      <Grid item className="page3Block " xs={12} md={6}>
                        {/* block */}
                        <div className="medal icon">
                          <SVGInline className="medal" svg={Medal} />
                        </div>
                        <div className="page3Heading">
                          {"Fair funding, guaranteed"}
                        </div>
                        <div className="page3Content">
                          {
                            "Our loans are 100% transparent with interest rates and borrowing fees that are fair and lower than any other alternative non-bank financier."
                          }
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item className="endText" xs={12}>
                    <div className="">
                      {
                        "If you are ready to fuel your growth, apply for a loan at"
                      }
                    </div>
                    <a href="thin-cats.azurewebsites.net">
                      {
                        "thin-cats.azurewebsites.net" /* todo Make sure you find and replace for all other links here */
                      }
                    </a>
                    <Button
                      variant="raised"
                      color="primary"
                      onClick={() => {
                        this.props.store.navResourcesBorrower()
                      }}
                    >
                      {"Learn More"}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            style={{ flexBasis: expandedContent }}
            className="whiteBackground"
          >
            <Grid container justify="center">
              <Grid className="containerized" item>
                <Grid
                  container
                  className="padding2em"
                  alignItems="center"
                  direction="column"
                >
                  <Grid item xs={12}>
                    <div className="peopleCash fillBlack topIcon">
                      <SVGInline
                        className="peopleCash fillBlack"
                        svg={PeopleCash}
                      />
                    </div>
                    <div className="page3Title">
                      {"Why "}
                      <p className="bold">{"ThinCats"}</p>
                      {" is right for "}
                      <p className="bold">{"smart investors"}</p>
                    </div>
                  </Grid>
                  <Grid item xs={12} className="page3Row">
                    <Grid container className="" direction="row">
                      <Grid className="page3Block" item xs={12} md={6}>
                        {/* Block */}
                        <div className="plant icon">
                          <SVGInline className="plant" svg={Plant} />
                        </div>
                        <div className="page3Heading">{"Better than cash"}</div>
                        <div className="page3Content">
                          {
                            "Your cash should be working hard for you. That's why we offer an average gross annual interest rate of 14%, with monthly repayments."
                          }
                        </div>
                      </Grid>
                      <Grid item className="page3Block" xs={12} md={6}>
                        {/* block */}
                        <div className="wallet icon">
                          <SVGInline className="wallet" svg={Wallet} />
                        </div>
                        <div className="page3Heading">{"Low maintenance"}</div>
                        <div className="page3Content">
                          {
                            "Our loan terms range from 2-5 years so you can maximise your returns while minimising the time spend watching your investments."
                          }
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className="page3Row">
                    <Grid container className="" direction="row">
                      <Grid item className="page3Block" xs={12} md={6}>
                        {/* block */}
                        <div className="magGlass icon">
                          <SVGInline className="magGlass" svg={MagGlass} />
                        </div>
                        <div className="page3Heading">
                          {"Due diligence, done for you"}
                        </div>
                        <div className="page3Content">
                          {
                            "Our dedicated team of lending specialists assess each loan application using leading-edge technology matched with human intelligence, rather than algorithms that don't understand context."
                          }
                        </div>
                      </Grid>
                      <Grid item className="page3Block" xs={12} md={6}>
                        {/* block */}
                        <div className="light icon">
                          <SVGInline className="light" svg={Shield} />
                        </div>
                        <div className="page3Heading">
                          {"Downside defended"}
                        </div>
                        <div className="page3Content">
                          {
                            "Every investment opportunity is backed by a registered charge over business assets and in most instances second mortgages over real property. We use a separate nominee company to make loans and hold client monies, so your funds are safe."
                          }
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className="page3Row">
                    <Grid container className="" direction="row">
                      <Grid item className="page3Block" xs={12} md={6}>
                        {/* block */}
                        <div className="light icon">
                          <SVGInline className="light" svg={Bag} />
                        </div>
                        <div className="page3Heading">
                          {"Experience where it matters"}
                        </div>
                        <div className="page3Content">
                          {
                            "We're a passionate team of ex-bankers and lending specialists."
                          }
                        </div>
                      </Grid>
                      <Grid item className="page3Block" xs={12} md={6}>
                        {/* block */}
                        <div className="light icon">
                          <SVGInline className="light" svg={Book} />
                        </div>
                        <div className="page3Heading">
                          {"Know your investments"}
                        </div>
                        <div className="page3Content">
                          {
                            "We let you know who and what you're investing in. And with a single market view of all available loans you can choose where your money goes."
                          }
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item className="endText" xs={12}>
                    <span className="">
                      {
                        "If you are a "
                      }
                    </span>
                    <a href="https://www.moneysmart.gov.au/glossary/s/sophisticated-investor">
                      {"sophisticated investor"}
                    </a>
                    <span className="">
                      {
                        " ready to start making smart investments in good companies, register at "
                      }
                    </span>
                    <a href="https://www.thincats.com.au/register/">
                      {"https://www.thincats.com.au/register/"}
                    </a>
                    <Button
                      variant="raised"
                      color="primary"
                      onClick={() => {
                        this.props.store.navResourcesLender()
                      }}
                    >
                      {"Learn More"}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}
