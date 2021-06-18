// import React from 'react';
//
// import {compose} from "redux";
// import Albums from "./Albums";
// import {connect} from "react-redux";
// import {getAlbums, updateCurrentPage, updatePageSize} from "../../reducers/albums-reducer";
// import {getAlbumsRs, getCurrentPageRs, getPageSizeRs} from "../../reselect/AlbumsReselect";
//
// class AlbumsContainer extends React.Component {
//     componentDidMount() {
//         this.props.getAlbums()
//     }
//     render() {
//         return (<Albums
//                     albums={this.props.albums}
//                     pageSize={this.props.pageSize}
//                     currentPage={this.props.currentPage}
//                     updatePageSize={this.props.updatePageSize}
//                     updateCurrentPage={this.props.updateCurrentPage}
//                 />
//         );
//     }
// }
//
// const mapStateToProps=(state)=>({
//     albums:getAlbumsRs(state),
//     pageSize: getPageSizeRs(state),
//     currentPage: getCurrentPageRs(state),
// })
//
// export default compose(
//     connect(mapStateToProps,{getAlbums,updatePageSize, updateCurrentPage})
// )(AlbumsContainer);