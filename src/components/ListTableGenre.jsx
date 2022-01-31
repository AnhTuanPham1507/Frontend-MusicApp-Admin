import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

function ListTableGenre() {
    const navigate = useNavigate()
    function handleEditGenre() {
        navigate('/genre-edit')
    }
    function handleCreateGenre() {
        navigate('/genre-create')
    }
    function handleRemoveRenre() {
        const is_delete = window.confirm("bạn có chắc muốn xoá")
        if (is_delete)
            alert("Xoá thành công")
    }
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên chủ đề</th>
                        <th>các bài hát</th>
                        <th>Tương tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Nhạc Pop</td>
                        <td>
                            <select id="songs">
                                <option value="1">Tháng năm</option>
                                <option value="2">Bước qua nhau</option>
                                <option value="3">Khoảng cách</option>
                                <option value="4">Sài gòn mưa rơi</option>
                            </select>
                        </td>
                        <td>
                            <FontAwesomeIcon onClick={handleEditGenre} style={{ marginRight: "10px" }} icon={faEdit} />
                            <FontAwesomeIcon onClick={handleRemoveRenre} icon={faTrash} />
                        </td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Nhạc ballad</td>
                        <td>
                            <select id="songs">
                                <option value="1">Tháng năm</option>
                                <option value="4">Sài gòn mưa rơi</option>
                                <option value="2">Bước qua nhau</option>
                                <option value="5">Chuyện đôi ta</option>
                            </select>
                        </td>
                        <td>
                            <FontAwesomeIcon onClick={handleEditGenre} style={{ marginRight: "10px" }} icon={faEdit} />
                            <FontAwesomeIcon onClick={handleRemoveRenre} icon={faTrash} />
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Button onClick={handleCreateGenre} style={{ marginLeft: "1010px" }} variant="primary">Thêm chủ đề</Button>
        </>
    );
}

export default ListTableGenre;