import React from 'react';

import { Container } from 'react-bootstrap';
import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';
import { USER } from '../assets/db/db'

function Login() {
    const navigate = useNavigate();
    function handleLoginSubmit(formValues) {
        const { username, password } = formValues

        try {
            const user = USER.find(u => u.username == username && u.password == password)
            if (user && user.role == 'ADMIN')
                navigate('/users');
            else
                alert("đăng nhập thất bại, vui lòng đăng nhập bằng tài khoản admin")
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <Container>
            <h1>Đăng nhập</h1>
            <LoginForm onLoginSubmit={handleLoginSubmit} />
        </Container>
    );
}

export default Login;