// @flow
import React from "react"
import {observer, inject} from "mobx-react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Menu from "components/menu/menu"
import "./home.less"
import classNames from "util/classNames"
import type {StoreType} from "store"

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
            b = (h / 2) + offset
            window.tl.to($black, 0.25, {clip: `rect(${[t, r, b, l].join()})`})
            r = (w / 2) + (textWidth / 2) + offset
            window.tl.to($black, 0.25, {clip: `rect(${[t, r, b, l].join()})`})
            t = (h / 2) - (textHeight / 2) - offset
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
        return (
            <div className="homeNew">
                <div className="background" />
                <Menu />
                <Grid container className="page1" justify="center" alignItems="flex-end" spacing="12">
                    <div className="thincatsCorner" />
                    <Grid item className="buttonsContainer" xs={12}>
                        <Grid container direction="row" justify="flex-end" spacing="12" className="buttons">
                            <Grid item justify="flex-end" className="buttons">
                                <Button variant="raised" color="primary">
                                    Register
                                </Button>
                            </Grid>
                            <Grid item justify="flex-end" className="buttons">
                                <Button variant="raised" color="primary">
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        {/*  */}
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
                        <Grid container justify="center" alignContent="center" spacing="12" className="seller">
                            <Grid item xs="10">
                                <p>Experience awesome returns etcExperience awesome returns etcExperience awesome returns etcExperience awesome returns etcExperience awesome returns etcExperience awesome returns etcExperience awesome returns etcExperience awesome returns etc</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <div className={findOutMoreClasses}>
                        {/* <Button variant="raised" color="primary">
                            {"Find out more"}
                        </Button> */}
                        <div className="bounce-container">
                            <i className="fa fa-long-arrow-down"></i>
                        </div>
                    </div>
                </Grid>
                <Grid container direction="row" wrap="nowrap" className="page2">
                    <Grid item xs={2}>
                        <Grid container className="page2-SubContainer" wrap="nowrap" direction="row">
                            <Grid item xs={2}>
                                {/* Border*/}
                            </Grid>
                            <Grid item xs={8}>
                                {/* Content*/}
                                <Grid container className="page2-SubContainer" wrap="nowrap" direction="column">
                                    <Grid item className="page2IconContainer" xs={12}>
                                        <div className="centered">
                                            <i className="fa fa-lightbulb-o"></i>
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
                    <Grid item xs={2}>
                        <Grid container className="page2-SubContainer" wrap="nowrap" direction="row">
                            <Grid item xs={2}>
                                {/* Border*/}
                            </Grid>
                            <Grid item xs={8}>
                                {/* Content*/}
                                <Grid container className="page2-SubContainer" wrap="nowrap" direction="column">
                                    <Grid item className="page2IconContainer" xs={12}>
                                        <div className="centered">
                                            <i className="fa fa-lightbulb-o"></i>
                                            <i className="fa fa-long-arrow-down"></i>
                                            <div className="blueText">{"ThinCats"}</div>
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
                        <Grid container className="" direction="column">
                            <Grid item xs={12} className="maxWidth">
                                <i className="fa fa-lightbulb-o"></i>
                                <div className="white" >Why ThinCats is right for growing businesses</div>
                            </Grid>
                            <Grid item xs={12} className="">
                                <Grid container className="" direction="row">
                                    <Grid className="page3Block white" item xs={6}>
                                        {/* Block */}
                                        <i className="topIcon fa fa-lightbulb-o"></i>
                                        <div className="page3Heading">{"Never miss an opportunity"}</div>
                                        <div className="page3Content">{"Get funding for sotck, equipment, business acquisitions or your next growth opporunity, with loans from $50,000 to $2million and repayment terms of 2-5 years."}</div>
                                    </Grid>
                                    <Grid item className="page3Block white" xs={6}>
                                        {/* block */}
                                        <i className="topIcon fa fa-lightbulb-o"></i>
                                        <div className="page3Heading">{"Never miss an opportunity"}</div>
                                        <div className="page3Content">{"Get funding for sotck, equipment, business acquisitions or your next growth opporunity, with loans from $50,000 to $2million and repayment terms of 2-5 years."}</div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} className="">
                                <Grid container className="" direction="row">
                                    <Grid item className="page3Block white" xs={6}>
                                        {/* block */}
                                        <i className="topIcon fa fa-lightbulb-o"></i>
                                        <div className="page3Heading">{"Never miss an opportunity"}</div>
                                        <div className="page3Content">{"Get funding for sotck, equipment, business acquisitions or your next growth opporunity, with loans from $50,000 to $2million and repayment terms of 2-5 years."}</div>
                                    </Grid>
                                    <Grid item className="page3Block white" xs={6}>
                                        {/* block */}
                                        <i className="topIcon fa fa-lightbulb-o"></i>
                                        <div className="page3Heading">{"Never miss an opportunity"}</div>
                                        <div className="page3Content">{"Get funding for sotck, equipment, business acquisitions or your next growth opporunity, with loans from $50,000 to $2million and repayment terms of 2-5 years."}</div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container className="" direction="column">
                            <Grid item xs={12} className="maxWidth">
                                <i className="fa fa-lightbulb-o"></i>
                                <div className="white" >Why ThinCats is right for growing businesses</div>
                            </Grid>
                            <Grid item xs={12} className="">
                                <Grid container className="" direction="row">
                                    <Grid className="page3Block white" item xs={6}>
                                        {/* Block */}
                                        <i className="topIcon fa fa-lightbulb-o"></i>
                                        <div className="page3Heading">{"Never miss an opportunity"}</div>
                                        <div className="page3Content">{"Get funding for sotck, equipment, business acquisitions or your next growth opporunity, with loans from $50,000 to $2million and repayment terms of 2-5 years."}</div>
                                    </Grid>
                                    <Grid item className="page3Block white" xs={6}>
                                        {/* block */}
                                        <i className="topIcon fa fa-lightbulb-o"></i>
                                        <div className="page3Heading">{"Never miss an opportunity"}</div>
                                        <div className="page3Content">{"Get funding for sotck, equipment, business acquisitions or your next growth opporunity, with loans from $50,000 to $2million and repayment terms of 2-5 years."}</div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} className="">
                                <Grid container className="" direction="row">
                                    <Grid item className="page3Block white" xs={6}>
                                        {/* block */}
                                        <i className="topIcon fa fa-lightbulb-o"></i>
                                        <div className="page3Heading">{"Never miss an opportunity"}</div>
                                        <div className="page3Content">{"Get funding for sotck, equipment, business acquisitions or your next growth opporunity, with loans from $50,000 to $2million and repayment terms of 2-5 years."}</div>
                                    </Grid>
                                    <Grid item className="page3Block white" xs={6}>
                                        {/* block */}
                                        <i className="topIcon fa fa-lightbulb-o"></i>
                                        <div className="page3Heading">{"Never miss an opportunity"}</div>
                                        <div className="page3Content">{"Get funding for sotck, equipment, business acquisitions or your next growth opporunity, with loans from $50,000 to $2million and repayment terms of 2-5 years."}</div>
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
