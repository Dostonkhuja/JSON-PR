import React from 'react';
import Dialogs from "./Dialogs";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {getCurrentUser, getUserMessages, sendMessage} from "../../reducers/dialogs-reducer";

class DialogsContainer extends React.PureComponent {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            if (this.props.owner !== null) {
                userId = this.props.owner.id
            }
            if (!userId) {
                this.props.history.push("/signin")
            }
        }
        this.props.getUserMessages(userId)
    }

    render() {
        return <Dialogs
            owner={this.props.owner.profile.username}
            currentUser={this.props.currentUser}
            getCurrentUser={this.props.getCurrentUser}
            userMessages={this.props.userMessages}
            sendMessage={this.props.sendMessage}
        />
    }
}

const mapStateToProps = state => ({
    userMessages: state.dialogsPage.userMessages,
    currentUser: state.dialogsPage.currentUser,
    owner:state.auth.signIn
})

export default compose(
    withRouter,
    connect(mapStateToProps, {getUserMessages,getCurrentUser,sendMessage})
)(DialogsContainer);