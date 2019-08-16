import React, { Fragment } from 'react';

const NoteViewer = ({note, setViewMode, clearSelectedNote}) => {
  return (
    <Fragment>
      <button onClick={clearSelectedNote}>Back</button>
      <button onClick={setViewMode}>Edit</button>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      
    </Fragment>
  );
}

export default NoteViewer;
