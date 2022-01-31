import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

function EditFormSong() {
    const formRef = useRef(null)
    function handleEditSong() {
        const updateForm = formRef.current
        const formData = new FormData(updateForm)

        async function editSong() {

        }

        editSong()
    }
    return (
        <Form ref={formRef} onSubmit={handleEditSong} enctype="multipart/form-data">
            <Form.Group className="mb-3">
                <Form.Label>Tên Bài hát</Form.Label>
                <Form.Control value="Bước qua nhau" type="text" placeholder="Song name" name="name" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Lời bài hát</Form.Label>
                <Form.Control value="dao dau\ndao dau\ndao dau\ndao dau\ndao dau\ndao dau\ndao dau\ndao dau\ndao dau\ndao dau\ndao dau\nCuộc đời cứ...\n trôi\n\ Ta nhìn lại ngày tháng...\n còn bên nhau\n\ Cùng những \nthăng trầm...\n\ Tại sao không vẫy...\n tay chào\n nơi ta đứng...\n bây giờ?\n\ Hai nơi hai người dưng\n...\n\ Đợi em bước...\n qua\n\ Để khiến anh nhận ra là\n đôi mắt em\n còn đang buồn\n...\n\ Màu hoa cài áo\n vẫn còn\n như lời hứa\n đã từng\n\ Giờ đây còn như xưa?\n...\n\ Dòng người vội vàng\n bước qua...\n\ Chợt như chiếc hôn\n thế thôi...\n\ Đôi môi chia làm đôi....\n\ Như ta đang mong vậy thôi...\n\ Người nghẹn ngào\n bước đi\n\ Chợt như chúng ta\n quay về\n\ Giấu trái tim mình\n và đừng thổn thức khi thấy nhau\n...\n\ Đoàn tàu kia dừng lại\n\ Còn hai ta bước\n qua nhau" type="text" placeholder="Song lyric" name="lyric" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Nhịp Bài hát</Form.Label>
                <Form.Control value="2.4" type="number" placeholder="Song duration" name="duration" />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Tải bải hát<thead></thead></Form.Label>
                <Form.Control type="file" name="songFile" accept=".mp3" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Cập nhật
            </Button>
        </Form>
    );
}

export default EditFormSong;