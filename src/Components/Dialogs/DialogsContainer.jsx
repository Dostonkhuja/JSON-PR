import React from 'react';

import Dialogs from "./Dialogs";
import {compose} from "redux";
import {connect} from "react-redux";

class DialogsContainer extends React.PureComponent {
    componentDidMount() {

    }
    render() {
        return <Dialogs />
    }
}

const mapStateToProps = state => ({

})

export default compose(
    connect(mapStateToProps, {})
) (DialogsContainer);