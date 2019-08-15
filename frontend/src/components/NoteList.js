import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {

  const notes=props.notes.map(note=>{
    return <NoteItem handleNoteClick={()=>props.handleNoteClick(note)} note={note}/>
  })

  return (
    <ul>
      {notes}
      
    </ul>
  );
}

export default NoteList;
