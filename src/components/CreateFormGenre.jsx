import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

function CreateFormGenre() {
    const formRef = useRef(null)
    function handleCreateGenre() {
        const updateForm = formRef.current
        const formData = new FormData(updateForm)

        async function createGenre() {

        }

        createGenre()
    }

    return (
        <Form ref={formRef} onSubmit={handleCreateGenre} enctype="multipart/form-data">
            <Form.Group className="mb-3">
                <Form.Label>Tên chủ đề</Form.Label>
                <Form.Control type="text" placeholder="Playlist name" name="name" />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Tải bải hát<thead></thead></Form.Label>
                <Form.Control type="file" name="songFile" accept=".mp3" multiple />
            </Form.Group>

            <Button variant="primary" type="submit">
                Thêm
            </Button>
        </Form>
    );
}

export default CreateFormGenre;