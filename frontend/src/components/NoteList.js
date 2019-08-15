import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, selectNote, deleteNote}) => {
  return (
    <ul>
      {notes.map(note => (
        <NoteItem key={note.id} note={note} selectNote={selectNote}
        deleteNote={deleteNote} />
      ))}
    </ul>
  );
};

export default NoteList;
