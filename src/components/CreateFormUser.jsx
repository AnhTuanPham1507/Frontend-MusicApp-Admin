import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';



function CreateFormUser() {
    const formRef = useRef(null)
    function handleCreateUser() {
        const updateForm = formRef.current
        const formData = new FormData(updateForm)

        async function createCustomer() {

        }

        createCustomer()
    }
    return (
        <Form ref={formRef} onSubmit={handleCreateUser} enctype="multipart/form-data">
            <Form.Group className="mb-3">
                <Form.Label>Tài khoản</Form.Label>
                <Form.Control type="text" placeholder="User Name" name="username" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Họ</Form.Label>
                <Form.Control type="text" placeholder="First Name" name="first_name" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Tên</Form.Label>
                <Form.Control type="text" placeholder="Last Name" name="last_name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>SDT</Form.Label>
                <Form.Control type="text" placeholder="Phone" name="phone" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>CMND</Form.Label>
                <Form.Control type="text" placeholder="Idnetity" name="identity" />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Hình đại diện</Form.Label>
                <Form.Control type="file" name="avatar" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Chức vụ</Form.Label>
                <Form.Select list="role" type="text" placeholder="Song lyric" name="role" >
                    <option>Admin</option>
                    <option>User</option>
                </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
                Thêm
            </Button>
        </Form>
    );
}

export default CreateFormUser;