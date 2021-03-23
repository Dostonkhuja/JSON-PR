import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {logout} from "../../reducers/auth-reducer";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        signIn: state.auth.signIn,
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer)