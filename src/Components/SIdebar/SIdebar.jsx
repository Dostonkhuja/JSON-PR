import {Layout, Menu} from "antd";
import {Link} from "react-router-dom";
import {
    UsergroupDeleteOutlined,
    OrderedListOutlined,
    CommentOutlined,
    MessageOutlined,
    PictureOutlined,
    CameraOutlined
} from "@ant-design/icons";

const {Sider} = Layout;

const Sidebar = () => {
    return (
        <Sider style={{height: 'maxContent'}} className="site-layout-background" width={200}>
            <Menu
                mode="inline"
                style={{height: '100%'}}
                defaultSelectedKeys={"0"}
                defaultOpenKeys={['sub1']}
            >
                <Menu.Item key="1" icon={<UsergroupDeleteOutlined/>}>
                    <Link to='/profile'> Profile </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<UsergroupDeleteOutlined/>}>
                    <Link to='/users'> Users </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<UsergroupDeleteOutlined/>}>
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
        </Sider>
    )
}

export default Sidebar;

