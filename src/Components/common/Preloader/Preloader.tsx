import React from 'react';

import s from './preloader.module.css'
import {Spin} from "antd";

const Preloader:React.FC = () => {
    return (
        <div className={s.preloader}>
            <Spin size="large"/>
        </div>
    );
};

export default Preloader;