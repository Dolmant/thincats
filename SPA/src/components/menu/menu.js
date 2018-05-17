// @flow
import React from "react"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer"
import InfoIcon from "@material-ui/icons/Info"
import SvgIcon from "@material-ui/core/SvgIcon"

type Props = {
};

// Todo state is URL reducer
type State = {
    value: number,
};

export default class Menu extends React.Component<Props, State> {
    state = {
        value: 0,
    };

    handleChange = (event: any, value: number) => {
        this.setState({value})
    };

    render() {
        const {value} = this.state
        return (
            <div className="menu">
                <BottomNavigation
                    value={value}
                    onChange={this.handleChange}
                    showLabels
                >
                    <BottomNavigationAction
                        label="Resources"
                        icon={<SvgIcon ><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z" /></SvgIcon>}
                    />
                    <BottomNavigationAction label="News" icon={<InfoIcon />} />
                    <BottomNavigationAction label="FAQ" icon={<QuestionAnswerIcon />} />
                </BottomNavigation>
            </div>
        )
    }
}
