import React from "react";

import s from '../profile.module.css'
import {Button} from "antd";

const ProfileData =React.memo( ({profile,isOwner,goToEditMode,signIn}) => {
    return ( <div className={s.profileData}>
        <br/>
        { <div><Button onClick={goToEditMode}>Edit Profile</Button></div> }
        <div>
            <span className={s.profileDataItem}> Name :</span> {signIn !== null&& signIn.profile.name}
        </div>
        <div>
            <span className={s.profileDataItem}> Company :</span>  {signIn !== null&& signIn.profile.company}
        </div>
        <div>
            <span className={s.profileDataItem}> Catch phrase :</span>  {signIn !== null&& signIn.profile.catchPhrase}
        </div>
        <div>
            <span className={s.profileDataItem}> Bs :</span>  {signIn !== null && signIn.profile.bs}
        </div>
        <div>
            <span className={s.profileDataItem}> Adress :</span>  {signIn !== null&& signIn.profile.adress}
        </div>
        <div>
            <span className={s.profileDataItem}> email :</span>  {signIn !== null&& signIn.profile.email}
        </div>
        <div>
            <span className={s.profileDataItem}> web site :</span>  {signIn !== null&& signIn.profile.webSite}
        </div>
        <div>
            <span className={s.profileDataItem}>phone :</span>  {signIn !== null&& signIn.profile.phone}
        </div>
    </div> )
})

export default ProfileData;