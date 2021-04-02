import React from 'react'

import './App.css';
import 'antd/dist/antd.css';
import {compose} from "redux";
import {connect} from "react-redux";
import { Row, Col, Layout} from 'antd';
import Sidebar from "./Components/SIdebar/SIdebar";
import {initializeApp} from "./reducers/app-reducer";
import withSuspense from "./Components/HOC/withSuspence";
import {Route, Switch, withRouter} from "react-router-dom";
import UsersContainer from './Components/Users/UsersContainer'
import Preloader from "./Components/common/Preloader/Preloader";
import HeaderContainer from "./Components/Header/HeaderContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";

//Lazy Import start
const CurrentAlbumContainer = React.lazy(() => import('./Components/Albums/CurrentAlbum/CurrentAlbumContainer'))
const ToDoListsContainer = React.lazy(() => import('./Components/ToDoLists/ToDoListsContainer'))
const CommentsContainer = React.lazy(() => import('./Components/Comments/CommentsContainer'))
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'))
const AlbumsContainer = React.lazy(() => import('./Components/Albums/AlbumsContainer'))
const PhotosContainer = React.lazy(() => import('./Components/Photos/PhotosContainer'))
const PostsContainer = React.lazy(() => import('./Components/Posts/PostsContainer'))
const SignIn = React.lazy(() => import('./Components/Login/SignIn'))
const SignUp = React.lazy(() => import('./Components/Login/SignUp'))
//lazy Import end

const {Content, Footer} = Layout;

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

         if (!this.props.initialized) {return <Preloader />}

        return (<Row>
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                    <Layout>

                        <HeaderContainer />

                        <Content style={{padding: '0 3vw'}}>
                            <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                                <Row>
                                    <Col xl={24} lg={24} md={24} span={0}>
                                        <Sidebar />
                                    </Col>
                                </Row>
                                <Content style={{padding: '0 2vw', minHeight: 460}}>
                                    <Switch>
                                        <Route exact path='/'><ProfileContainer/> </Route>
                                        <Route path='/profile/:userId?' component={ProfileContainer}/>
                                        <Route path='/users' render={() => <UsersContainer/>}/>
                                        <Route path='/comments' render={withSuspense(CommentsContainer)}/>
                                        <Route path='/todos' render={withSuspense(ToDoListsContainer)}/>
                                        <Route path='/albums' render={withSuspense(AlbumsContainer)}/>
                                        <Route path='/photos' render={withSuspense(PhotosContainer)}/>
                                        <Route path='/posts' render={withSuspense(PostsContainer)}/>
                                        <Route path='/dialogs/:userId?' render={withSuspense(DialogsContainer)}/>
                                        <Route path='/signin' render={withSuspense(SignIn)}/>
                                        <Route path='/signup' render={withSuspense(SignUp)}/>
                                        <Route path='/currentAlbum/:albumId?'
                                               render={withSuspense(CurrentAlbumContainer)}/>
                                    </Switch>
                                </Content>
                            </Layout>
                        </Content>

                        <Footer style={{textAlign: 'center', backgroundColor: '#001529', color: 'white'}}>
                            Jsonplaceholder web-site ©2021 Created by Doston Sheraliyev
                        </Footer>

                    </Layout>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized :state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);
