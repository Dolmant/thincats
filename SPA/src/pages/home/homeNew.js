// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import Menu from "components/menu/menu"
import "./home.less"

type Props = {
};

export default class Home extends React.Component<Props> {
    render() {
        return (
            <div className="homeNew">
                <Menu />
                <div className="background">
                    <Grid container spacing={12}>
                        <Grid item xs={6}>
                            <div className="logo">
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="buttons">
                                <div className="register">
                                </div>
                                <div className="login">
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className="findoutmore">
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}
