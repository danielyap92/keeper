import React from "react";



function Note(x) {
    return (
        <div className="note">
            <h1>{x.title}</h1>
            <p>{x.content}</p>
        </div>
    )
}



export default Note;
