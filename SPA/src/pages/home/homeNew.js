// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Menu from "components/menu/menu"
import "./home.less"

declare var $;
declare var TweenLite;
declare var TimelineLite;
declare var Elastic;

type Props = {
};
// find out more
export default class Home extends React.Component<Props> {
    componentDidMount() {
        $(window).on("load resize", function introAnimation() {
            const $black = $("#black").css("clip", "")
            const w = $(this).width()
            const h = $(this).height()

            const $text = $("#text")
            const textWidth = $text.width()
            const textHeight = $text.height()

            const offset = 10

            let t = 0
            let r = w
            let b = h
            let l = 0
            TweenLite.set($black, {clip: `rect(${[0, w, h, 0].join()})`})
            if (this.tl) this.tl.stop()
            this.tl = new TimelineLite()
            l = (w / 2) - (textWidth / 2) - offset
            this.tl.to($black, 0.25, {clip: `rect(${[t, r, b, l].join()})`}, 0.5)
            b = (h / 2) + offset
            this.tl.to($black, 0.25, {clip: `rect(${[t, r, b, l].join()})`})
            r = (w / 2) + (textWidth / 2) + offset
            this.tl.to($black, 0.25, {clip: `rect(${[t, r, b, l].join()})`})
            t = (h / 2) - (textHeight / 2) - offset
            this.tl.to($black, 1.75, {clip: `rect(${[t, r, b, l].join()})`, ease: Elastic.easeOut})
        })
    }

    render() {
        return (
            <div className="homeNew">
                <div className="background" />
                <Menu />
                <Grid container className="page1" justify="center" alignItems="flex-end" spacing="12">
                    <Grid item xs={12}>
                        <Grid container alignItems="flex-start" direction="column" alignContent="center" spacing="12" className="buttons">
                            <Grid container spacing="12" className="buttons">
                                <Button variant="raised" color="primary">
                                    Register
                                </Button>
                            </Grid>
                            <Grid container spacing="12" className="buttons">
                                <Button variant="raised" color="primary">
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        {/*  */}
                        <div id="black" />
                        <div id="text">
                            <div className="logo" />{"Thin"}<b>{"Cats"}</b>
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
                    <div className="findOutMore">
                        <Button variant="raised" color="primary">
                            {"Find out more"}
                        </Button>
                        <div className="bounce-container">
                            <i className="fa fa-arrow-circle-down"></i>
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
