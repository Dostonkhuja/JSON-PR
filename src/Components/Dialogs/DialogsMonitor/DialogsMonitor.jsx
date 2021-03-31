import React from 'react';
import s from '../dialogs.module.css'
import {v4 as uuidv4} from 'uuid';

const DialogsMonitor = React.memo((props) => {
    return (<>
        <h1 className={s.titeUserSendingMessage}>{props.currentUser.length > 2 && props.currentUser[1].userName}</h1>
        <div className={s.dialogsMonitor}>
            {
                props.currentUser.length > 2 &&
                props.currentUser[2].messages[0]
                    .map(m => <div className={s.messagesMonitor} key={uuidv4()}>
                        <span className={s.ownerMessage}>{props.owner !== null && props.owner.profile.username} :</span> <br/>
                        <p>{m.message}</p>
                    </div>)
            }
        </div>
    </>)
})

export default DialogsMonitor;