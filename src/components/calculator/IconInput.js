import React from "react";
import InputSlider from 'react-input-slider';
import 'react-input-slider/dist/input-slider.css';

// export default class IconInput extends React.Component {
//     render() {
//         const {styles, icon} = this.props;
//         return (
//             <div className={styles.inputField}>
//                 <div className={styles.inputIcon}>{icon}</div>
//                 <input {...this.props} />
//             </div>
//         );
//     }
// }

export default class IconInput extends React.Component {
    render() {
        const { styles, icon } = this.props;
        return (
            <div className={"styles.inputField"}>
                <div className={"styles.inputIcon"}>{icon}</div>
                <input {...this.props} />
            </div>
        );
    }
}