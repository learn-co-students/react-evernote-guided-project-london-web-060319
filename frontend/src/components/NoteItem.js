import React from 'react';

const NoteList = (props) => (
  <li onClick={props.handleNoteClick}>
    <h2>{props.note.title}</h2>
    <p>{props.note.body.slice(0,20)+'...'}</p>
  </li>
);

export default NoteList;
