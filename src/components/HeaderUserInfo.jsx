import React from 'react';
import { Dropdown } from 'react-bootstrap';

function HeaderUserInfo() {
    return (
        <Dropdown.Menu>
            {
                <Dropdown.Item href="/">Đăng xuất</Dropdown.Item>
            }
        </Dropdown.Menu>

    );
}

export default HeaderUserInfo;