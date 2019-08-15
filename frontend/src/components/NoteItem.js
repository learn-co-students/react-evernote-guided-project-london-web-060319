import React from "react";


const NoteList = ({ note, selectNote, deleteNote }) => (
  <li onClick={() => selectNote(note)}>
    <h2>{note.title}</h2>
    <p>{note.body.length > 100 ? note.body.slice(0, 100) : note.body}...</p>
    <button onClick={() => deleteNote(note.id)}>Delete</button>

  </li>
);

export default NoteList;
