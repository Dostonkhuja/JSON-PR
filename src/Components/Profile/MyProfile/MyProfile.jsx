import React, {useState} from 'react';

import {Button, Card} from "antd";
import s from '../profile.module.css'
import ProfileData from "./ProfileData";
import {UploadOutlined} from '@ant-design/icons';
import ProfileDataReduxForm from "./ProfileDataForm";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import UserPhotoUndifined from '../../assets/images/images.png'

const MyProfile = React.memo( (props) => {
    const [editMode, setEditMode] = useState(false)

    const onSubmit = (formData) => {
        props.setMyProfile(formData)
        setEditMode(false)
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {props.savePhoto(e.target.files[0])}
    }

    return (
        <div>
            <Card>

                <div className={s.profileHeader}>
                    <img src={props.userPhoto !== null ? props.userPhoto : UserPhotoUndifined} className={s.mainPhoto}/>
                    <br/>
                    <h2>{props.signIn.profile.username}</h2>
                    <Button icon={<UploadOutlined/>}><label htmlFor="file-upload">Upload your photo</label></Button>
                    <input style={{display: 'none'}} type="file" accept="image/gif,, image/jpeg, image/png"
                           onChange={mainPhotoSelected} id="file-upload" name="image"/>
                </div>
                {editMode
                    ? <ProfileDataReduxForm initialValues={props.signIn.profile} profile={props.signIn.profile}
                                            onSubmit={onSubmit}/> //initialValues={profile}
                    : <ProfileData signIn={props.signIn} goToEditMode={() => {
                        setEditMode(true)
                    }}/>
                }

                <MyPostsContainer />
            </Card>
        </div>
    );
});

export default MyProfile;