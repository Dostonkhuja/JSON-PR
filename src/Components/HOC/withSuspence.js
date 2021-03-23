import React from 'react'
import {Spin} from "antd";

const withSuspense = (Component) => {
    return (props)=> {
        return <React.Suspense fallback={<Spin/>}> <Component {...props}/> </React.Suspense>
    }
};

export default withSuspense;