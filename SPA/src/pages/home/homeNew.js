// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Menu from "components/menu/menu"
import "./home.less"

type Props = {
};

export default class Home extends React.Component<Props> {
    render() {
        return (
            <div className="homeNew">
                <div className="background" />
                <Menu />
                <Grid container className="homeContent" justify="center" alignItems="flex-end" spacing="12">
                    <Grid item xs={6}>
                        <div className="logo" />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container direction="column" alignContent="center" spacing="12" className="buttons">
                            <Grid container justify="center" spacing="12" className="buttons">
                                <Button variant="raised" color="primary">
                                    Register
                                </Button>
                            </Grid>
                            <Grid container justify="center" spacing="12" className="buttons">
                                <Button variant="raised" color="primary">
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justify="center" alignContent="center" spacing="12" className="seller">
                            <Grid item xs="10">
                                <p>Experience awesome returns etcExperience awesome returns etcExperience awesome returns etcExperience awesome returns etcExperience awesome returns etcExperience awesome returns etcExperience awesome returns etcExperience awesome returns etc</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Button variant="raised" color="primary">
                        Find out more
                    </Button>
                </Grid>
            </div>
        )
    }
}
