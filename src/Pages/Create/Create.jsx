import "./Create.scss"
import React, { useState } from 'react';

export default function Create({ data, setData }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    function addCard(event) {
        event.preventDefault(); 
        if (title && body) {
            let newInfo = {
                id: data.length + 1,
                title: title,
                body: body
            }
setData((prevState) => [...prevState, newInfo]);

           setTitle("");
           setBody("");
        } else {
            alert("fill in both fields")
        }
    }

    return (
        <div className="body">
            <form onSubmit={addCard}>
                <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder="body" value={body} onChange={(e) => setBody(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}