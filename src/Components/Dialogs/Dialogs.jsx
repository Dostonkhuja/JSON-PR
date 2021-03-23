import React from 'react';

const Dialogs =React.memo( (props) => {
    if (props.users === null) {
        return <div>Loading...</div>
    }
    return (<div>

        </div>
    );
});

export default Dialogs;