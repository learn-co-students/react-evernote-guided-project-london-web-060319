import React from 'react';

// const bodyLength = body => {
// if (body.length >100){ return body.slice(0, 50)}
// }

const NoteList = ({note, selectNote}) => (
  <li onClick={() => selectNote(note)}>
    <h2>{note.title}</h2>
    <p>{(note.body.length >50) ? note.body.slice(0, 50) : note.body}...</p>
  </li>
);

export default NoteList;
