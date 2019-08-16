import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({notes, selectNote}) => {
  return (
    <ul>
      {notes.map(note => <NoteItem note={note} key={note.id} selectNote={selectNote}/>)}
      
    </ul>
  );
}

export default NoteList;
