import React, {Component} from 'react';

import UserItem from "./UserItem";

class UserItemContainer extends Component {
    componentDidMount() {
        this.props.getCurrentUser(this.props.user.id,this.props.user.username)
    }
    render() {
        return <UserItem
                    getCurrentUser={this.props.getCurrentUser}
                    user={this.props.user}
                />
    }
}

export default UserItemContainer;