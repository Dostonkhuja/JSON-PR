import React from 'react';
import s from '../Dialogs/dialogs.module.css'
import DialogsMessages from "./DialogsMessages/DialogsMessages";
import DialogsMonitor from "./DialogsMonitor/DialogsMonitor";
import UserItemContainer from "./UserItem/UserItemContainer";

const Dialogs = React.memo((props) => {
    return (<div className={s.dialogs}>
            <div className='dialogsUsers'>
                {props.userMessages
                    .map(um => <UserItemContainer key={um.id || 99}
                                                  user={um}
                                                  getCurrentUser={props.getCurrentUser}
                    />)
                }
            </div>
            <div className={s.dialogsSending}>
                <DialogsMonitor currentUser={props.currentUser}/>
                <DialogsMessages owner={props.owner} sendMessage={props.sendMessage} currentUser={props.currentUser} />
            </div>
        </div>
    );
});

export default Dialogs;