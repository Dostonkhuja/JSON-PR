import React, {Component} from 'react';
import UserItem from "./UserItem";

class UserItemContainer extends Component {
    componentDidMount() {
        this.props.getCurrentUser(this.props.user.id,this.props.user.username)
    }

    render() {
        return (
            <div>
                <UserItem
                    getCurrentUser={this.props.getCurrentUser}
                    user={this.props.user}
                />
            </div>
        );
    }
}

export default UserItemContainer;