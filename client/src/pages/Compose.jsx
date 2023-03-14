import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "../Editor";

export default function Compose() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [body, setBody] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);
    async function composePost(ev) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('body', body);
        data.set('file', files[0]);
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/post', {
            method: 'POST',
            body: data,
            credentials: 'include',
        });
        if (response.ok) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <div className="compose-box">
            <h2>Compose</h2>
            <form onSubmit={composePost}>
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
                    <button id='publish'>Publish</button>
                </div>
            </form>
        </div>
    );
}