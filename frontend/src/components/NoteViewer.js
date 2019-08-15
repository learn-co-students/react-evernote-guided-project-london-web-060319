import React, { Fragment } from "react";

const NoteViewer = ({ selectedNote, setViewMode, clearSelectedNote }) => {
  return (
    <Fragment>
      <h2>{selectedNote.title}</h2>
      <p>{selectedNote.body}</p>
      <button onClick={clearSelectedNote}>Back</button>
      <button onClick={setViewMode}>Edit</button>
    </Fragment>
  );
};

export default NoteViewer;
