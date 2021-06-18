// import React from "react";
//
// import Header from "./Header";
// import {connect} from "react-redux";
// import {logout} from "../../reducers/auth-reducer";
// import {getIsAuth} from "../../reselect/LoginReselect";
// import {getSignInRs} from "../../reselect/HeaderReselect";
//
// class HeaderContainer extends React.Component {
//     render() {
//         return <Header {...this.props}/>
//     }
// }
//
// let mapStateToProps = (state) => {
//     return {
//         isAuth: getIsAuth(state),
//         signIn: getSignInRs(state),
//     }
// }
//
// export default connect(mapStateToProps, {logout})(HeaderContainer)