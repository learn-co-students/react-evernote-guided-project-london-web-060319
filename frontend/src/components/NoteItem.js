import React from 'react';

const NoteItem = (props) => (
  <li onClick={() => props.handleClick(props.note.id)}>
    <h2>{props.note.title}</h2>
    <p>{(props.note.body).split(' ').slice(0, 4).join(' ')}...</p>
  </li>
);

export default NoteItem;
