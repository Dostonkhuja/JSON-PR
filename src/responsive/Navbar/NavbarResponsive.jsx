import React, {useState} from 'react';
import {Col, Drawer, Menu, Row} from "antd";
import {
    AlignRightOutlined,
    CameraOutlined, CommentOutlined,
    MailOutlined, MessageOutlined,
    OrderedListOutlined,
    PictureOutlined,
    UsergroupDeleteOutlined,
    RightSquareOutlined
} from "@ant-design/icons";
import {Link} from "react-router-dom";
import s from './navbarResponsive.module.css'

const NavbarMobile = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (<>
        <Drawer
            title="Menu"
            placement="left"
            closable={false}
            onClose={onClose}
            visible={visible}
        >

            <Menu
                mode="inline"
                style={{height: '100%',marginBottom:"20px"}}
                defaultSelectedKeys={"0"}
            >
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
                    <Link to='/todos'> Todos </Link>
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
        </Drawer>
    <Row>
        <Col xl={0} lg={0} md={0} sm={24} xs={24}>
            <AlignRightOutlined onClick={showDrawer}/>
            <span className={s.openMenu}>
                <RightSquareOutlined onClick={showDrawer} style={{ fontSize: '30px'}}/>
            </span>
        </Col>
    </Row>

    </>
    );
};

export default NavbarMobile;