import React from 'react';

import s from '../Dialogs/dialogs.module.css'
import DialogsMonitor from "./DialogsMonitor/DialogsMonitor";
import UserItemContainer from "./UserItem/UserItemContainer";
import DialogsMessages from "./DialogsMessages/DialogsMessages";

const Dialogs = React.memo((props) => {
    return (<div className={s.dialogs}>
            <div className={s.dialogsUsers}>
                {
                    props.userMessages.length !==0 && props.userMessages
                        .map(um => <UserItemContainer
                            key={um.id || 99} user={um} getCurrentUser={props.getCurrentUser}
                        />)
                }
            </div>
            <div className={s.dialogsSending}>
                <DialogsMonitor owner={props.owner} currentUser={props.currentUser}/>
                <DialogsMessages sendMessage={props.sendMessage} currentUser={props.currentUser} />
            </div>
        </div>
    );
});

export default Dialogs;