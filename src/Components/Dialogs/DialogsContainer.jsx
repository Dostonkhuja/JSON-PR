import React from 'react';

import {compose} from "redux";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {Redirect} from "react-router-dom";
import {getCurrentUser, getUserMessages, sendMessage} from "../../reducers/dialogs-reducer";
import {getCurrentUserRs, getOwnerRs, getUserMessagesRs} from "../../reselect/DialogsReselect";

class DialogsContainer extends React.PureComponent {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUserMessages(userId)
    }
    render() {
        if(this.props.owner === null){return <Redirect to={'/signin'}/>}
        return <Dialogs
            getCurrentUser={this.props.getCurrentUser}
            userMessages={this.props.userMessages}
            currentUser={this.props.currentUser}
            sendMessage={this.props.sendMessage}
            owner={this.props.owner}
        />
    }
}

const mapStateToProps = state => ({
    userMessages: getUserMessagesRs(state),
    currentUser: getCurrentUserRs(state),
    owner:getOwnerRs(state)
})

export default compose(
    withRouter,
    connect(mapStateToProps, {getUserMessages,getCurrentUser,sendMessage})
)(DialogsContainer);