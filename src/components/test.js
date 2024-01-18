
const notes = require("../notes");

const Note = notes.map(x =>         
<div className="note">
<h1>{x.title}</h1>
<p>{x.content}</p>
</div>)

console.log(Note);