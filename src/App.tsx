import React, {useEffect} from 'react'

import './App.css';
import 'antd/dist/antd.css';

import {Col, Layout, Row} from 'antd';
import Sidebar from "./Components/SIdebar/SIdebar";
import {initializeApp} from "./reducers/app-reducer";
import withSuspense from "./Components/HOC/withSuspence";
import {Route, Switch} from "react-router-dom";
import Users from './Components/Users/Users'
import Preloader from "./Components/common/Preloader/Preloader";
import Header from "./Components/Header/Header";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {AppStateType} from "./state-managment/redux-store";
import {useDispatch, useSelector} from "react-redux";

//Lazy Import start
const CurrentAlbum = React.lazy(() => import('./Components/Albums/CurrentAlbum/AlbumPhotos'))
const ToDoListsContainer = React.lazy(() => import('./Components/ToDoLists/ToDoLists'))
const Comments = React.lazy(() => import('./Components/Comments/Comments'))
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'))
const Albums = React.lazy(() => import('./Components/Albums/Albums'))
const Photos = React.lazy(() => import('./Components/Photos/Photos'))
const PostsContainer = React.lazy(() => import('./Components/Posts/Posts'))
const SignIn = React.lazy(() => import('./Components/Login/SignIn'))
const SignUp = React.lazy(() => import('./Components/Login/SignUp'))
//lazy Import end

 let CurrentAlbumSuspended = withSuspense(CurrentAlbum)

const {Content, Footer} = Layout;


const App2:React.FC = () => {
   const dispatch = useDispatch()

    const initialized = useSelector((state:AppStateType)=> state.app.initialized)

    useEffect(()=>{
        dispatch(initializeApp())
    },[])

    if (!initialized) {return <Preloader />}

    return (<Row>
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                <Layout>

                    <Header />

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
                                    <Route path='/users' render={() => <Users/>}/>
                                    <Route path='/comments' render={withSuspense(Comments)}/>
                                    <Route path='/todos' render={withSuspense(ToDoListsContainer)}/>
                                    <Route path='/albums' render={withSuspense(Albums)}/>
                                    <Route path='/photos' render={withSuspense(Photos)}/>
                                    <Route path='/posts' render={withSuspense(PostsContainer)}/>
                                    <Route path='/dialogs/:userId?' render={withSuspense(DialogsContainer)}/>
                                    <Route path='/signin' render={withSuspense(SignIn)}/>
                                    <Route path='/signup' render={withSuspense(SignUp)}/>
                                    <Route path='/currentAlbum/:albumId?'
                                           render={()=> <CurrentAlbumSuspended />}/>
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

export default App2
