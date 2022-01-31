import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

function EditFormGenre() {
    const formRef = useRef(null)
    function handleEditGenre() {
        const updateForm = formRef.current
        const formData = new FormData(updateForm)

        async function editGenre() {

        }

        editGenre()
    }

    return (
        <Form ref={formRef} onSubmit={handleEditGenre} enctype="multipart/form-data">
            <Form.Group className="mb-3">
                <Form.Label>Tên chủ đề</Form.Label>
                <Form.Control value="nhạc Pop" type="text" placeholder="Playlist name" name="name" />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Tải bải hát<thead></thead></Form.Label>
                <Form.Control type="file" name="songFile" accept=".mp3" multiple />
            </Form.Group>

            <Button variant="primary" type="submit">
                Cập nhật
            </Button>
        </Form>
    );
}

export default EditFormGenre;