import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';


function CreateFormPlaylist() {
    const formRef = useRef(null)
    function handleCreatePlaylist() {
        const updateForm = formRef.current
        const formData = new FormData(updateForm)

        async function createPlaylist() {

        }

        createPlaylist()
    }

    return (
        <Form ref={formRef} onSubmit={handleCreatePlaylist} enctype="multipart/form-data">
            <Form.Group className="mb-3">
                <Form.Label>Tên Playlist</Form.Label>
                <Form.Control type="text" placeholder="Playlist name" name="name" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Chủ sở hữu</Form.Label>
                <Form.Select list="user" type="text" placeholder="Song lyric" name="user" >
                    <option>Phạm Anh Tuấn</option>
                    <option>Trần Anh Khoa</option>
                    <option>Anh Khang</option>
                    <option></option>
                </Form.Select>
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

export default CreateFormPlaylist;