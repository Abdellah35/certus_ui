import './Topbar.scss';
import React, { Component } from 'react'
import { Menu, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class Topbar extends Component {
    render() {
        return (
            <Menu secondary className="topbar">
                <Menu.Item>
                    <Image size='mini' className="logo" />
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Button className="empty-button">
                            <Link to='/welcome/login'> Sign in </Link>
                        </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button className="green-button border-radius-20">
                            <Link to='/welcome/registor'>Get Started &gt; </Link>
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}
