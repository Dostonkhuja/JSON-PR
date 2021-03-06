import {Layout, Menu} from "antd";
import s from './sidebar.module.css'
import {Link} from "react-router-dom";
import {
    UsergroupDeleteOutlined, OrderedListOutlined, CommentOutlined,
    MessageOutlined, PictureOutlined, CameraOutlined, MailOutlined
} from "@ant-design/icons";
import React from "react";

const {Sider} = Layout;

const Sidebar:React.FC = () => {
    return (
        <Sider style={{height: '100%',backgroundColor:'white'}} className="site-layout-background" width={200}>
            <div className={s.csad}>
            <Menu  mode="inline" style={{height: '100%'}}>

                <Menu.Item key="1" icon={<UsergroupDeleteOutlined/>}>
                    <Link to='/profile'> Profile </Link>
                </Menu.Item>

                <Menu.Item key="2" icon={<UsergroupDeleteOutlined/>}>
                    <Link to='/users'> Users </Link>
                </Menu.Item>

                <Menu.Item key="3" icon={<MailOutlined />}>
                    <Link to='/dialogs'> Dialogs </Link>
                </Menu.Item>

                <Menu.Item key="4" icon={<OrderedListOutlined/>}>
                    <Link to='/todos'> To do list </Link>
                </Menu.Item>

                <Menu.Item key="5" icon={<PictureOutlined/>}>
                    <Link to='/photos'> Photos </Link>
                </Menu.Item>

                <Menu.Item key="6" icon={<CameraOutlined/>}>
                    <Link to='/albums'> Albums </Link>
                </Menu.Item>

                <Menu.Item key="7" icon={<MessageOutlined/>}>
                    <Link to='/posts'> Posts </Link>
                </Menu.Item>

                <Menu.Item key="8" icon={<CommentOutlined/>}>
                    <Link to='/comments'> Comments </Link>
                </Menu.Item>

            </Menu>
            </div>
        </Sider>
    )
}

export default Sidebar;

