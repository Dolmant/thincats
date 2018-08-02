// @flow
import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import fetch from "isomorphic-fetch"
import "./editPosts.less"

type Props = {
};

type State = {
    content: string,
    password: string,
};

export default class Sponsors extends React.Component<Props, State> {
    state = {
        content: "",
        password: "",
    }

    content() {
        return (
            <div>
                <TextField
                    id="multiline-flexible"
                    label="Multiline"
                    multiline
                    rowsMax="20"
                    value={this.state.content}
                    onChange={change => this.setState({content: change})}
                    margin="normal"
                />
            </div>
        )
    }

    previewer() {
        return (
            <div dangerouslySetInnerHTML={this.state.content} />
        )
    }

    sendPost() {
        fetch("/posts", {
            body: JSON.stringify(this.state.content), // must match 'Content-Type' header
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Auth: this.state.password,
            },
        })
            .then(response => response.json())
            .then(response => console.log("Success:", response))
    }

    submit() {
        return (
            <div>
                <TextField
                    id="password"
                    label="password"
                    value={this.state.password}
                    onChange={change => this.setState({password: change})}
                    margin="normal"
                />
                <Button onClick={() => this.sendPost()} />
            </div>
        )
    }

    render() {
        return (
            <div className="editPosts">
                <Grid container>
                    <Grid item xs={12}>
                        {this.content}
                    </Grid>
                    <Grid item xs={12}>
                        {this.previewer}
                    </Grid>
                    <Grid item xs={12}>
                        {this.submit}
                    </Grid>
                </Grid>
            </div>
        )
    }
}
