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

declare var $
declare var TweenLite
declare var TimelineLite
declare var Elastic

type Props = {}

type InjectedProps = {
  store: StoreType
}

type State = {
  scrolled: boolean,
  user: number
}

const randomNumbers = [
  [43, 5],
  [0, 5],
  [61, 15],
  [31, 55],
  [28, 18],
  [78, 100],
  [75, 6],
  [6, 49],
  [19, 9],
  [81, 48],
  [41, 24],
  [21, 53],
  [19, 16],
  [91, 28],
  [55, 2],
  [75, 95],
  [62, 48],
  [21, 94],
  [39, 10],
  [4, 75]
]

@inject("store")
@observer
export default class Home extends InjectedComponent<
  Props,
  InjectedProps,
  State
> {
  state = {
    scrolled: false,
    user: ((window.$ && $(window).width()) || window.innerWidth) > 500 ? 0 : 1 // investor = 2 and borrower = 1
  }

  clipRect = () => {
    // clip if not first time playing the animation
    const $black = $("#black").css("clip", "")
    const w = $(window).width()
    const h = $(window).height()

    const offset = 10

    const $text = document.querySelector("#innerText") || {}
    const textWidth = $text.clientWidth || 0
    const textHeight = $text.clientHeight || 0

    let t = 0
    let r = w
    let b = h
    let l = 0

    if (!this.props.store.loaded) {
      TweenLite.set($black, { clip: `rect(${[0, w, h, 0].join()})` })
      if (window.tl) window.tl.stop()
      window.tl = new TimelineLite()
      l = w / 2 - textWidth / 2 - offset
      window.tl.to($black, 0.25, { clip: `rect(${[t, r, b, l].join()})` }, 0.5)
      b = h / 2.5 + offset // + (textHeight / 2) not required as bottom already offset by second line of text
      window.tl.to($black, 0.25, { clip: `rect(${[t, r, b, l].join()})` })
      r = w / 2 + textWidth / 2 + offset
      window.tl.to($black, 0.25, { clip: `rect(${[t, r, b, l].join()})` })
      t = h / 2.5 - textHeight - offset
      window.tl.to($black, 1.75, {
        clip: `rect(${[t, r, b, l].join()})`,
        ease: Elastic.easeOut
      })
      this.props.store.playOnce()
    } else {
      l = w / 2 - textWidth / 2 - offset
      b = h / 2.5 + offset
      r = w / 2 + textWidth / 2 + offset
      t = h / 2.5 - textHeight - offset
      $black.css("clip", () => `rect(${[t, r, b, l].join("px, ")}px)`)
    }
  }

  componentDidMount() {
    this.clipRect()
    window.addEventListener("resize", this.clipRect)
    window.addEventListener("scroll", this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.clipRect)
    window.removeEventListener("scroll", this.onScroll)
  }

  onScroll = () => {
    this.setState({ scrolled: true })
    startAnimation(this.myCountUp)
    window.removeEventListener("scroll", this.onScroll)
  }

  render() {
    const findOutMoreClasses = classNames({
      findOutMore: true,
      hideIt: true
    })

    const arrows = []
    for (let i = 0; i < 20; i += 1) {
      const [rand1, rand2] = randomNumbers[i]
      arrows.push(
        <div
          style={{
            left: `${i * 5 - 2.5}vw`,
            maxHeight: `${50 + 0.5 * rand1}px`,
            animationDuration: `${7.5 + 0.025 * rand1}s`,
            animationIterationCount: "infinite"
          }}
          key={i}
          className="expandThickArrow leftArrow"
        />
      )
      arrows.push(
        <div
          style={{
            left: `${i * 5}vw`,
            maxHeight: `${50 + 0.5 * rand2}px`,
            animationDuration: `${7.5 + 0.025 * rand2}s`,
            animationIterationCount: "infinite"
          }}
          key={i + 20}
          className="expandThickArrow rightArrow"
        />
      )
    }

    const translateLeft = this.state.user === 2

    const defaultContent = "25%"
    const expandedContent = this.state.user > 0 ? "50%" : defaultContent

    const settings = {
      dots: false,
      vertical: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    }

    return (
      <div className="homeNew">
        <div className="background" />
        <Grid container className="page1" justify="center">
          <Grid className="homeMenu" item xs={12}>
            <MenuBar investorSelector={false} />
          </Grid>
          <Grid className="centerpiece" item xs={12}>
            {/*  */}
            {arrows}
            <div id="black" />
            <div className="logo" />
            <div id="text">
              <div id="innerText">
                <span className="dandy">{"Thin"}</span>
                <p className="cats">{"Cats"}</p>
              </div>
              <div className="slogan">
                <Slider {...settings}>
                  <div className="tickerText">{"Smart"}</div>
                  <div className="tickerText">{"Australia"}</div>
                  <div className="tickerText">{"Marketplace"}</div>
                  <div className="tickerText">{"Borrowing"}</div>
                  <div className="tickerText">{"Investing"}</div>
                </Slider>
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
              {/* <Hidden mdDown> */}
              <Grid className="sellerText" item xs={12}>
                <p>{"Business lending by good people."}</p>
              </Grid>
              {/* </Hidden> */}
              <Grid item className="buttonContainer" xs={6}>
                <Button
                  variant="raised"
                  color="primary"
                  onClick={() => {
                    var win = window.open(
                      "https://thin-cats.azurewebsites.net/", //todo replace all of these links
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
                      "https://thincat.blockbond.co/investor",
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
          <div className={findOutMoreClasses}>
            <div className="bounce-container">
              <i className="fa fa-long-arrow-down" />
            </div>
          </div>
        </Grid>
        <Grid container justify="center" direction="row" className="ticker">
          <Grid item>
            <div className="banner">
              <br />
              <CountUp
                separator=","
                prefix="$"
                duration={5}
                start={0}
                end={12000000}
                className="amount-lent"
                ref={countUp => {
                  this.myCountUp = countUp
                }}
              />
              <br />
              <div className="funded">{"funded so far!"}</div>
              <br />
              <div className="applyButtons">
                <Button
                  variant="raised"
                  color="primary"
                  onClick={() => {
                    this.setState({ user: 1 })
                    if (document.documentElement) {
                      window.scrollTo({
                        left: 0,
                        top: document.documentElement.clientHeight,
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
                    if (document.documentElement) {
                      window.scrollTo({
                        left: 0,
                        top: document.documentElement.clientHeight,
                        behavior: "smooth"
                      })
                    }
                  }}
                >
                  {"why invest?"}
                </Button>
              </div>
              <br />
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
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
                        "thin-cats.azurewebsites.net" /* Make sure you find and replace for all other links here */
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
                    <div className="">
                      {
                        "If you are ready to start making smart investments in good companies, register as an investor at"
                      }
                    </div>
                    <a href="https://thincat.blockbond.co/investor">
                      {"thincat.blockbond.co/investor"}
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

// <Grid container direction="row" wrap="nowrap" className="page2">
// <Grid className="flow" item>
//     <Grid container className="page2-SubContainer" wrap="nowrap" direction="row">
//         <Grid item xs={2}>
//             {/* Border*/}
//         </Grid>
//         <Grid item xs={8}>
//             {/* Content*/}
//             <Grid container className="page2-SubContainer" wrap="nowrap" direction="column">
//                 <Grid item className="page2IconContainer" xs={12}>
//                     <div className="centered">
//                         <SVGInline className="light fillWhite" svg={Light}></SVGInline>
//                     </div>
//                 </Grid>
//                 <Grid item className="page2TextContainer" xs={12}>
//                     <div className="page2Text">{"When a business needs funding to grow but can't find it through traditional sources..."}</div>
//                 </Grid>
//             </Grid>
//         </Grid>
//         <Grid item xs={2}>
//             {/* Border*/}
//         </Grid>
//     </Grid>
// </Grid>
// <Grid className="flow" item>
//     <Grid container className="page2-SubContainer" wrap="nowrap" direction="row">
//         <Grid item className="fancyBorder" xs={2}>
//             {/* Border*/}
//         </Grid>
//         <Grid item xs={8}>
//             {/* Content*/}
//             <Grid container className="page2-SubContainer" wrap="nowrap" direction="column">
//                 <Grid item className="page2IconContainer" xs={12}>
//                     <div className="centered">
//                         <SVGInline className="light fillWhite" svg={Light}></SVGInline>
//                         <SVGInline className="arrow fillWhite" svg={Arrow}></SVGInline>
//                         <div className="blueText">{"Thin"}<p className="bold">{"Cats"}</p></div>
//                     </div>
//                 </Grid>
//                 <Grid item className="page2TextContainer" xs={12}>
//                     <div className="page2Text">{"...they partner with ThinCats to submit their business case for funding."}</div>
//                 </Grid>
//             </Grid>
//         </Grid>
//         <Grid item xs={2}>
//             {/* Border*/}
//         </Grid>
//     </Grid>
// </Grid>
// <Grid className="flow" item>
//     <Grid container className="page2-SubContainer" wrap="nowrap" direction="row">
//         <Grid item className="fancyBorder" xs={2}>
//             {/* Border*/}
//         </Grid>
//         <Grid item xs={8}>
//             {/* Content*/}
//             <Grid container className="page2-SubContainer" wrap="nowrap" direction="column">
//                 <Grid item className="page2IconContainer" xs={12}>
//                     <div className="centered">
//                         <SVGInline className="light fillWhite" svg={Light}></SVGInline>
//                         <SVGInline className="arrow fillWhite" svg={Arrow}></SVGInline>
//                         <div className="blueText">{"Thin"}<p className="bold">{"Cats"}</p></div>
//                         <SVGInline className="arrow fillWhite" svg={Arrow}></SVGInline>
//                         <SVGInline className="peopleAlert" svg={PeopleAlert}></SVGInline>
//                     </div>
//                 </Grid>
//                 <Grid item className="page2TextContainer" xs={12}>
//                     <div className="page2Text">{"Our credit team assesses each loan application thoroughly before sharing it with the ThinCats investor community."}</div>
//                 </Grid>
//             </Grid>
//         </Grid>
//         <Grid item xs={2}>
//             {/* Border*/}
//         </Grid>
//     </Grid>
// </Grid>
// <Grid className="flow" item>
//     <Grid container className="page2-SubContainer" wrap="nowrap" direction="row">
//         <Grid item className="fancyBorder" xs={2}>
//             {/* Border*/}
//         </Grid>
//         <Grid item xs={8}>
//             {/* Content*/}
//             <Grid container className="page2-SubContainer" wrap="nowrap" direction="column">
//                 <Grid item className="page2IconContainer" xs={12}>
//                     <div className="centered">
//                         <SVGInline className="light fillWhite" svg={Light}></SVGInline>
//                         <SVGInline className="reverseArrow fillWhite" svg={Arrow}></SVGInline>
//                         <div className="blueText">{"Thin"}<p className="bold">{"Cats"}</p></div>
//                         <SVGInline className="reverseArrow fillWhite" svg={Arrow}></SVGInline>
//                         <SVGInline className="peopleCash" svg={PeopleCash}></SVGInline>
//                     </div>
//                 </Grid>
//                 <Grid item className="page2TextContainer" xs={12}>
//                     <div className="page2Text">{"Investors choose the loans that interest them and then act collectively to finance loans of up to $2million..."}</div>
//                 </Grid>
//             </Grid>
//         </Grid>
//         <Grid item xs={2}>
//             {/* Border*/}
//         </Grid>
//     </Grid>
// </Grid>
// <Grid className="flow" item>
//     <Grid container className="page2-SubContainer" wrap="nowrap" direction="row">
//         <Grid item className="fancyBorder" xs={2}>
//             {/* Border*/}
//         </Grid>
//         <Grid item xs={8}>
//             {/* Content*/}
//             <Grid container className="page2-SubContainer" wrap="nowrap" direction="column">
//                 <Grid item className="page2IconContainer" xs={12}>
//                     <div className="centered">
//                         <SVGInline className="light fillWhite" svg={Light}></SVGInline>
//                         <div className="dualArrow">
//                             <SVGInline className="arrow fillWhite" svg={Arrow}></SVGInline>
//                             <SVGInline className="reverseArrow fillWhite" svg={Arrow}></SVGInline>
//                         </div>
//                         <div className="blueText">{"Thin"}<p className="bold">{"Cats"}</p></div>
//                         <div className="dualArrow">
//                             <SVGInline className="arrow fillWhite" svg={Arrow}></SVGInline>
//                             <SVGInline className="reverseArrow fillWhite" svg={Arrow}></SVGInline>
//                         </div>
//                         <SVGInline className="peopleCash" svg={PeopleCash}></SVGInline>
//                     </div>
//                 </Grid>
//                 <Grid item className="page2TextContainer" xs={12}>
//                     <div className="page2Text">{"...helping Australian business grow and providing fair returns to investors."}<br />{"That's how we're connecting growing businesses with smart investors."}</div>
//                 </Grid>
//             </Grid>
//         </Grid>
//         <Grid item xs={2}>
//             {/* Border*/}
//         </Grid>
//     </Grid>
// </Grid>
// </Grid>