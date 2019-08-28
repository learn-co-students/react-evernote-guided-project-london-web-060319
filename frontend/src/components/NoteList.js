import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {
        props.notes.map(note => <NoteItem handleClick={props.handleClick} note={note}/>)
      }
    </ul>
  );
}

export default NoteList;
