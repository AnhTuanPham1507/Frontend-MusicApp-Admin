import React from 'react'

import Header from '../components/Header'
import ListTableUser from '../components/ListTableUser'
import ListTableSong from '../components/ListTableSong'
import ListTablePlaylist from '../components/ListTablePlaylist'
import ListTableGenre from '../components/ListTableGenre'
import EditFormUser from '../components/EditFormUser'
import EditFormSong from '../components/EditFormSong'
import EditFormPlaylist from '../components/EditFormPlaylist'
import EditFormGenre from '../components/EditFormGenre'
import CreateFormUser from '../components/CreateFormUser'
import CreateFormSong from '../components/CreateFormSong'
import CreateFormPlaylist from '../components/CreateFormPlaylist'
import CreateFormGenre from '../components/CreateFormGenre'

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"
import { Container } from 'react-bootstrap'
import Login from './Login'

function HomeAdmin() {
    return (
        <Container>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='users/' element={<ListTableUser />} />
                    <Route path='songs/' element={<ListTableSong />} />
                    <Route path='playlists/' element={<ListTablePlaylist />} />
                    <Route path="genres/" element={<ListTableGenre />} />
                    <Route path='user-edit/' element={<EditFormUser />} />
                    <Route path='song-edit/' element={<EditFormSong />} />
                    <Route path='playlist-edit/' element={<EditFormPlaylist />} />
                    <Route path="genre-edit/" element={<EditFormGenre />} />
                    <Route path='user-create/' element={<CreateFormUser />} />
                    <Route path='song-create/' element={<CreateFormSong />} />
                    <Route path='playlist-create/' element={<CreateFormPlaylist />} />
                    <Route path='genre-create/' element={<CreateFormGenre />} />
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

export default HomeAdmin;