import React from "react";
import {Button} from "antd";

const ProfileData =React.memo( ({profile,isOwner,goToEditMode,signIn}) => {
    return ( <div>
        <br/>
        { <div><Button onClick={goToEditMode}>Edit Profile</Button></div> }
        <div>
            <b> Name :</b> {signIn !== null&& signIn.profile.name}
        </div>
        <div>
            <b> Company :</b>  {signIn !== null&& signIn.profile.company}
        </div>
        <div>
            <b> Catch phrase :</b>  {signIn !== null&& signIn.profile.catchPhrase}
        </div>
        <div>
            <b> Bs :</b>  {signIn !== null && signIn.profile.bs}
        </div>
        <div>
            <b> Adress :</b>  {signIn !== null&& signIn.profile.adress}
        </div>
        <div>
            <b> email :</b>  {signIn !== null&& signIn.profile.email}
        </div>
        <div>
            <b> web site :</b>  {signIn !== null&& signIn.profile.webSite}
        </div>
        <div>
            <b>phone :</b>  {signIn !== null&& signIn.profile.phone}
        </div>
    </div> )
})

export default ProfileData;