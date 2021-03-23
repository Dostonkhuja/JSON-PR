import React from 'react'

import './App.css';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import {} from '@ant-design/icons';
import {Route} from "react-router-dom";
import Sidebar from "./Components/SIdebar/SIdebar";
import withSuspense from "./Components/HOC/withSuspence";
import UsersContainer from './Components/Users/UsersContainer'
import HeaderContainer from "./Components/Header/HeaderContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";

//Lazy Import start
const CurrentAlbumContainer = React.lazy(() => import('./Components/Albums/CurrentAlbum/CurrentAlbumContainer'))
const ToDoListsContainer = React.lazy(() => import('./Components/ToDoLists/ToDoListsContainer'))
const CommentsContainer = React.lazy(() => import('./Components/Comments/CommentsContainer'))
const AlbumsContainer = React.lazy(() => import('./Components/Albums/AlbumsContainer'))
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'))
const PhotosContainer = React.lazy(() => import('./Components/Photos/PhotosContainer'))
const PostsContainer = React.lazy(() => import('./Components/Posts/PostsContainer'))
const SignIn = React.lazy(() => import('./Components/Login/SignIn'))
const SignUp = React.lazy(() => import('./Components/Login/SignUp'))
//lazy Import end

const {Content, Footer} = Layout;

function App() {
    return (
        <Layout>
            <HeaderContainer/>
            <Content style={{padding: '0 50px'}}>
                <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                    <Sidebar/>
                    <Content style={{padding: '0 24px', minHeight: 460}}>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>

                        <Route path='/comments' render={withSuspense(CommentsContainer)}/>
                        <Route path='/todos' render={withSuspense(ToDoListsContainer)}/>
                        <Route path='/albums' render={withSuspense(AlbumsContainer)}/>
                        <Route path='/photos' render={withSuspense(PhotosContainer)}/>
                        <Route path='/posts' render={withSuspense(PostsContainer)}/>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/signin' render={withSuspense(SignIn)}/>
                        <Route path='/signup' render={withSuspense(SignUp)}/>

                        <Route path='/currentAlbum/:albumId?' render={withSuspense(CurrentAlbumContainer)}/>
                    </Content>
                </Layout>
            </Content>
            <Footer style={{textAlign: 'center', backgroundColor: '#001529', color: 'white'}}>
                Jsonplaceholder web-site ©2021 Created by Doston Sheraliyev
            </Footer>
        </Layout>
    )
}

export default App;
