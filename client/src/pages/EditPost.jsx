import { useState, useEffect } from 'react';
import { Navigate, useParams } from "react-router-dom";
import Editor from '../Editor';

export default function EditPost() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [body, setBody] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState('false');

    useEffect(() => {
        fetch('http://localhost:4000/post/' + id).then(response => {
            response.json().then(postInfo => {
                setTitle(postInfo.title);
                setBody(postInfo.body);
                setSummary(postInfo.summary);
            });
        });
    }, [id]);


    async function updatePost(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('body', body);
        data.set('id', id);
        if (files?.[0]) {
            data.set('file', files?.[0]);
        }
        const response = await fetch("http://localhost:4000/post", {
            method: 'PUT',
            body: data,
            credentials: 'include',
        });
        if (response.ok) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/post/' + id} />
    }

    return (
        <div className="compose-box">
            <h2>Compose</h2>
            <form onSubmit={updatePost}>
                <div className="user-box mb-2">
                    <input type="title"
                        name="setTitle"
                        required=""
                        placeholder="Title"
                        value={title}
                        onChange={ev => setTitle(ev.target.value)}>
                    </input>
                </div>

                <div className="user-box mb-2">
                    <input type="summary"
                        name="setSummary"
                        required=""
                        placeholder="Summary"
                        value={summary}
                        onChange={ev => setSummary(ev.target.value)}>
                    </input>
                </div>

                <div className="user-box">
                    <input type="file"
                        name="image"
                        onChange={ev => setFiles(ev.target.files)}>
                    </input>
                </div>

                <Editor value={body} onChange={setBody} />

                <div className="button-form">
                    <button id='publish'>Update Post</button>
                </div>
            </form>
        </div>
    );
}