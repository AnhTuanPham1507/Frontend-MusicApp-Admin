import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';


function CreateFormSong(props) {
    const formRef = useRef(null)
    function handleCreateSong() {
        const updateForm = formRef.current
        const formData = new FormData(updateForm)

        async function createSong() {

        }

        createSong()
    }
    return <Form ref={formRef} onSubmit={handleCreateSong} enctype="multipart/form-data">
        <Form.Group className="mb-3">
            <Form.Label>Tên Bài hát</Form.Label>
            <Form.Control type="text" placeholder="Song name" name="name" />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Lời bài hát</Form.Label>
            <Form.Control type="text" placeholder="Song lyric" name="lyric" />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Nhịp Bài hát</Form.Label>
            <Form.Control type="number" placeholder="Song duration" name="duration" />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Tải bải hát<thead></thead></Form.Label>
            <Form.Control type="file" name="songFile" accept=".mp3" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Thêm
        </Button>
    </Form>
}

export default CreateFormSong;