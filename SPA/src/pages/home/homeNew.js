// @flow
import React from "react"
import {observer, inject} from "mobx-react"
import Grid from "@material-ui/core/Grid"
import MenuBar from "components/menuBar/menuBar"
import "./home.less"
import classNames from "util/classNames"
import type {StoreType} from "store"
import Light from "assets/icons/LightSymbol.svg"
import Arrow from "assets/icons/ArrowSymbol.svg"
import PeopleCash from "assets/icons/SymbolPeopleCash.svg"
import PeopleAlert from "assets/icons/SymbolPeopleAlert.svg"
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

declare var $;
declare var TweenLite;
declare var TimelineLite;
declare var Elastic;

type Props = {
    store: StoreType,
};

type State = {
    scrolled: boolean,
};

@inject("store")
@observer
export default class Home extends React.Component<Props, State> {
    state = {
        scrolled: false,
    }
    componentDidMount() {
        // $(window).on("load", () => {
        // Intro boxing animation
        const $black = $("#black").css("clip", "")
        const w = $(window).width()
        const h = $(window).height()

        const $text = $("#text")
        const textWidth = $text.width()
        const textHeight = $text.height()

        const offset = 10

        let t = 0
        let r = w
        let b = h
        let l = 0
        if (!this.props.store.loaded) {
            TweenLite.set($black, {clip: `rect(${[0, w, h, 0].join()})`})
            if (window.tl) window.tl.stop()
            window.tl = new TimelineLite()
            l = (w / 2) - (textWidth / 2) - offset
            window.tl.to($black, 0.25, {clip: `rect(${[t, r, b, l].join()})`}, 0.5)
            b = (h / 2.5) + offset // + (textHeight / 2) not required as bottom already offset by second line of text
            window.tl.to($black, 0.25, {clip: `rect(${[t, r, b, l].join()})`})
            r = (w / 2) + (textWidth / 2) + offset
            window.tl.to($black, 0.25, {clip: `rect(${[t, r, b, l].join()})`})
            t = (h / 2.5) - (textHeight / 2) - offset
            window.tl.to($black, 1.75, {clip: `rect(${[t, r, b, l].join()})`, ease: Elastic.easeOut})
            this.props.store.playOnce()
        } else {
            // clip if not first time playing the animation
            l = (w / 2) - (textWidth / 2) - offset
            b = (h / 2) + offset
            r = (w / 2) + (textWidth / 2) + offset
            t = (h / 2) - (textHeight / 2) - offset
            $black.css("clip", () => `rect(${[t, r, b, l].join("px, ")}px)`)
        }
        // })

        window.addEventListener("scroll", this.onScroll)
    }

    onScroll = () => {
        this.setState({scrolled: true})
        window.removeEventListener("scroll", this.onScroll)
    }

    render() {
        const findOutMoreClasses = classNames({
            findOutMore: true,
            hideIt: this.state.scrolled,
        })
        const w = $(window).width()

        const arrows = []
        for (let i = 0; i < w / 50; i += 1) {
            let rand = Math.random()
            let rand30 = rand * 30
            let rand25 = rand * 2.5
            // arrows.push(
            //     <div
            //         style={{
            //             left: `${(i * 50 - 25) - (rand30)}px`,
            //             bottom: `${-rand30}px`,
            //             animationDuration: `${2.5 + (rand25)}s`,
            //         }}
            //         className="leftArrow expandPointArrow"
            //     />)
            // arrows.push(
            //     <div
            //         style={{
            //             left: `${(i * 50) - (rand30)}px`,
            //             bottom: `${-rand30}px`,
            //             animationDuration: `${2.5 + (rand25)}s`,
            //         }}
            //         className="rightArrow expandPointArrow"
            //     />)
            arrows.push(
                <div
                    style={{
                        left: `${(i * 50) - 25}px`,
                        maxHeight: `${50 + (50 * rand)}px`,
                        animationDuration: `${7.5 + (2.5 * rand)}s`,
                        animationIterationCount: "infinite",
                    }}
                    className="leftArrow expandThickArrow"
                />)
            rand = Math.random()
            rand30 = rand * 30
            rand25 = rand * 2.5
            arrows.push(
                <div
                    style={{
                        left: `${i * 50}px`,
                        maxHeight: `${50 + (50 * rand)}px`,
                        animationDuration: `${7.5 + (2.5 * rand)}s`,
                        animationIterationCount: "infinite",
                    }}
                    className="rightArrow expandThickArrow"
                />)
        }

        return (
            <div className="homeNew">
                <div className="background" />
                <Grid container className="page1" justify="center" alignItems="flex-end">
                    <Grid className="homeMenu" item xs={12}>
                        <MenuBar />
                    </Grid>
                    <Grid item xs={12}>
                        {/*  */}
                        {arrows}
                        <div id="black" />
                        <div className="logo" />
                        <div id="text">
                            {"Thin"}<b>{"Cats"}</b>
                            <div className="slogan">
                                {"Smart Business"}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justify="center" alignContent="center" className="seller">
                            <p>
                                Investors fund a portion of the total loan and borrowers fund their loan requirements through multiple lenders.
                                <br />
                                Diversify and reduce your risk, bypass banks and get a better deal.
                            </p>
                        </Grid>
                    </Grid>
                    <div className={findOutMoreClasses}>
                        {/* <Button variant="raised" color="primary">
                            {"Find out more"}
                        </Button> */}
                        {/* <div className="bounce-container">
                            <i className="fa fa-long-arrow-down"></i>
                        </div> */}
                    </div>
                </Grid>
                <Grid container direction="row" wrap="nowrap" className="page2">
                    <Grid className="flow" item>
                        <Grid container className="page2-SubContainer" wrap="nowrap" direction="row">
                            <Grid item xs={2}>
                                {/* Border*/}
                            </Grid>
                            <Grid item xs={8}>
                                {/* Content*/}
                                <Grid container className="page2-SubContainer" wrap="nowrap" direction="column">
                                    <Grid item className="page2IconContainer" xs={12}>
                                        <div className="centered">
                                            <SVGInline className="light fillWhite" svg={Light}></SVGInline>
                                        </div>
                                    </Grid>
                                    <Grid item className="page2TextContainer" xs={12}>
                                        <div className="page2Text">{"When a business needs funding to grow but can't find it through traditional sources..."}</div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={2}>
                                {/* Border*/}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className="flow" item>
                        <Grid container className="page2-SubContainer" wrap="nowrap" direction="row">
                            <Grid item className="fancyBorder" xs={2}>
                                {/* Border*/}
                            </Grid>
                            <Grid item xs={8}>
                                {/* Content*/}
                                <Grid container className="page2-SubContainer" wrap="nowrap" direction="column">
                                    <Grid item className="page2IconContainer" xs={12}>
                                        <div className="centered">
                                            <SVGInline className="light fillWhite" svg={Light}></SVGInline>
                                            <SVGInline className="arrow fillWhite" svg={Arrow}></SVGInline>
                                            <div className="blueText">{"Thin"}<b>{"Cats"}</b></div>
                                        </div>
                                    </Grid>
                                    <Grid item className="page2TextContainer" xs={12}>
                                        <div className="page2Text">{"When a business needs funding to grow but can't find it through traditional sources..."}</div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={2}>
                                {/* Border*/}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className="flow" item>
                        <Grid container className="page2-SubContainer" wrap="nowrap" direction="row">
                            <Grid item className="fancyBorder" xs={2}>
                                {/* Border*/}
                            </Grid>
                            <Grid item xs={8}>
                                {/* Content*/}
                                <Grid container className="page2-SubContainer" wrap="nowrap" direction="column">
                                    <Grid item className="page2IconContainer" xs={12}>
                                        <div className="centered">
                                            <SVGInline className="light fillWhite" svg={Light}></SVGInline>
                                            <SVGInline className="arrow fillWhite" svg={Arrow}></SVGInline>
                                            <div className="blueText">{"Thin"}<b>{"Cats"}</b></div>
                                            <SVGInline className="arrow fillWhite" svg={Arrow}></SVGInline>
                                            <SVGInline className="peopleAlert" svg={PeopleAlert}></SVGInline>
                                        </div>
                                    </Grid>
                                    <Grid item className="page2TextContainer" xs={12}>
                                        <div className="page2Text">{"When a business needs funding to grow but can't find it through traditional sources..."}</div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={2}>
                                {/* Border*/}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className="flow" item>
                        <Grid container className="page2-SubContainer" wrap="nowrap" direction="row">
                            <Grid item className="fancyBorder" xs={2}>
                                {/* Border*/}
                            </Grid>
                            <Grid item xs={8}>
                                {/* Content*/}
                                <Grid container className="page2-SubContainer" wrap="nowrap" direction="column">
                                    <Grid item className="page2IconContainer" xs={12}>
                                        <div className="centered">
                                            <SVGInline className="light fillWhite" svg={Light}></SVGInline>
                                            <SVGInline className="reverseArrow fillWhite" svg={Arrow}></SVGInline>
                                            <div className="blueText">{"Thin"}<b>{"Cats"}</b></div>
                                            <SVGInline className="reverseArrow fillWhite" svg={Arrow}></SVGInline>
                                            <SVGInline className="peopleCash" svg={PeopleCash}></SVGInline>
                                        </div>
                                    </Grid>
                                    <Grid item className="page2TextContainer" xs={12}>
                                        <div className="page2Text">{"When a business needs funding to grow but can't find it through traditional sources..."}</div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={2}>
                                {/* Border*/}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className="flow" item>
                        <Grid container className="page2-SubContainer" wrap="nowrap" direction="row">
                            <Grid item className="fancyBorder" xs={2}>
                                {/* Border*/}
                            </Grid>
                            <Grid item xs={8}>
                                {/* Content*/}
                                <Grid container className="page2-SubContainer" wrap="nowrap" direction="column">
                                    <Grid item className="page2IconContainer" xs={12}>
                                        <div className="centered">
                                            <SVGInline className="light fillWhite" svg={Light}></SVGInline>
                                            <div className="dualArrow">
                                                <SVGInline className="arrow fillWhite" svg={Arrow}></SVGInline>
                                                <SVGInline className="reverseArrow fillWhite" svg={Arrow}></SVGInline>
                                            </div>
                                            <div className="blueText">{"Thin"}<b>{"Cats"}</b></div>
                                            <div className="dualArrow">
                                                <SVGInline className="arrow fillWhite" svg={Arrow}></SVGInline>
                                                <SVGInline className="reverseArrow fillWhite" svg={Arrow}></SVGInline>
                                            </div>
                                            <SVGInline className="peopleCash" svg={PeopleCash}></SVGInline>
                                        </div>
                                    </Grid>
                                    <Grid item className="page2TextContainer" xs={12}>
                                        <div className="page2Text">{"When a business needs funding to grow but can't find it through traditional sources..."}</div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={2}>
                                {/* Border*/}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="row" className="page3">
                    <Grid item xs={6} className="patternBackground">
                        <Grid container className="" alignItems="center" direction="column">
                            <Grid item xs={12}>
                                <div className="light topIcon">
                                    <SVGInline className="fillWhite light" svg={Light}></SVGInline>
                                </div>
                                <div className="" >Why ThinCats is right for growing businesses</div>
                            </Grid>
                            <Grid item xs={12} className="">
                                <Grid container className="" direction="row">
                                    <Grid className="page3Block " item xs={6}>
                                        {/* Block */}
                                        <div className="light">
                                            <SVGInline className="light" svg={Shoot}></SVGInline>
                                        </div>
                                        <div className="page3Heading">{"Never miss an opportunity"}</div>
                                        <div className="page3Content">{"Get funding for sotck, equipment, business acquisitions or your next growth opporunity, with loans from $50,000 to $2million and repayment terms of 2-5 years."}</div>
                                    </Grid>
                                    <Grid item className="page3Block " xs={6}>
                                        {/* block */}
                                        <div className="light">
                                            <SVGInline className="light" svg={Man}></SVGInline>
                                        </div>
                                        <div className="page3Heading">{"Never miss an opportunity"}</div>
                                        <div className="page3Content">{"Get funding for sotck, equipment, business acquisitions or your next growth opporunity, with loans from $50,000 to $2million and repayment terms of 2-5 years."}</div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} className="">
                                <Grid container className="" direction="row">
                                    <Grid item className="page3Block " xs={6}>
                                        {/* block */}
                                        <div className="time">
                                            <SVGInline className="time" svg={Time}></SVGInline>
                                        </div>
                                        <div className="page3Heading">{"Never miss an opportunity"}</div>
                                        <div className="page3Content">{"Get funding for sotck, equipment, business acquisitions or your next growth opporunity, with loans from $50,000 to $2million and repayment terms of 2-5 years."}</div>
                                    </Grid>
                                    <Grid item className="page3Block " xs={6}>
                                        {/* block */}
                                        <div className="lock">
                                            <SVGInline className="lock" svg={Lock}></SVGInline>
                                        </div>
                                        <div className="page3Heading">{"Never miss an opportunity"}</div>
                                        <div className="page3Content">{"Get funding for sotck, equipment, business acquisitions or your next growth opporunity, with loans from $50,000 to $2million and repayment terms of 2-5 years."}</div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} className="">
                                <Grid container className="" direction="row">
                                    <Grid item className="page3Block " xs={6}>
                                        {/* block */}
                                        <div className="light">
                                            <SVGInline className="light" svg={Chart}></SVGInline>
                                        </div>
                                        <div className="page3Heading">{"Never miss an opportunity"}</div>
                                        <div className="page3Content">{"Get funding for sotck, equipment, business acquisitions or your next growth opporunity, with loans from $50,000 to $2million and repayment terms of 2-5 years."}</div>
                                    </Grid>
                                    <Grid item className="page3Block " xs={6}>
                                        {/* block */}
                                        <div className="medal">
                                            <SVGInline className="medal" svg={Medal}></SVGInline>
                                        </div>
                                        <div className="page3Heading">{"Never miss an opportunity"}</div>
                                        <div className="page3Content">{"Get funding for sotck, equipment, business acquisitions or your next growth opporunity, with loans from $50,000 to $2million and repayment terms of 2-5 years."}</div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item className="endText" xs={12}>
                                <div className="" >If you are ready to fuel your growth, apply for a loan at</div>
                                <a href="www.thincats.com.au">www.thincats.com.au</a>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} className="whiteBackground">
                        <Grid container className="" alignItems="center" direction="column">
                            <Grid item xs={12}>
                                <div className="light topIcon">
                                    <SVGInline className="light" svg={Light}></SVGInline>
                                </div>
                                <div className="" >Why ThinCats is right for growing businesses</div>
                            </Grid>
                            <Grid item xs={12} className="">
                                <Grid container className="" direction="row">
                                    <Grid className="page3Block" item xs={6}>
                                        {/* Block */}
                                        <div className="plant">
                                            <SVGInline className="plant" svg={Plant}></SVGInline>
                                        </div>
                                        <div className="page3Heading">{"Never miss an opportunity"}</div>
                                        <div className="page3Content">{"Get funding for sotck, equipment, business acquisitions or your next growth opporunity, with loans from $50,000 to $2million and repayment terms of 2-5 years."}</div>
                                    </Grid>
                                    <Grid item className="page3Block" xs={6}>
                                        {/* block */}
                                        <div className="wallet">
                                            <SVGInline className="wallet" svg={Wallet}></SVGInline>
                                        </div>
                                        <div className="page3Heading">{"Never miss an opportunity"}</div>
                                        <div className="page3Content">{"Get funding for sotck, equipment, business acquisitions or your next growth opporunity, with loans from $50,000 to $2million and repayment terms of 2-5 years."}</div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} className="">
                                <Grid container className="" direction="row">
                                    <Grid item className="page3Block" xs={6}>
                                        {/* block */}
                                        <div className="magGlass">
                                            <SVGInline className="magGlass" svg={MagGlass}></SVGInline>
                                        </div>
                                        <div className="page3Heading">{"Never miss an opportunity"}</div>
                                        <div className="page3Content">{"Get funding for sotck, equipment, business acquisitions or your next growth opporunity, with loans from $50,000 to $2million and repayment terms of 2-5 years."}</div>
                                    </Grid>
                                    <Grid item className="page3Block" xs={6}>
                                        {/* block */}
                                        <div className="light">
                                            <SVGInline className="light" svg={Shield}></SVGInline>
                                        </div>
                                        <div className="page3Heading">{"Never miss an opportunity"}</div>
                                        <div className="page3Content">{"Get funding for sotck, equipment, business acquisitions or your next growth opporunity, with loans from $50,000 to $2million and repayment terms of 2-5 years."}</div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} className="">
                                <Grid container className="" direction="row">
                                    <Grid item className="page3Block" xs={6}>
                                        {/* block */}
                                        <div className="light">
                                            <SVGInline className="light" svg={Bag}></SVGInline>
                                        </div>
                                        <div className="page3Heading">{"Never miss an opportunity"}</div>
                                        <div className="page3Content">{"Get funding for sotck, equipment, business acquisitions or your next growth opporunity, with loans from $50,000 to $2million and repayment terms of 2-5 years."}</div>
                                    </Grid>
                                    <Grid item className="page3Block" xs={6}>
                                        {/* block */}
                                        <div className="light">
                                            <SVGInline className="light" svg={Book}></SVGInline>
                                        </div>
                                        <div className="page3Heading">{"Never miss an opportunity"}</div>
                                        <div className="page3Content">{"Get funding for sotck, equipment, business acquisitions or your next growth opporunity, with loans from $50,000 to $2million and repayment terms of 2-5 years."}</div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item className="endText" xs={12}>
                                <div className="" >If you are ready to start making smart investments in good companies, register as an investor at</div>
                                <a href="thincats.com.au/register">thincats.com.au/registeru</a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
