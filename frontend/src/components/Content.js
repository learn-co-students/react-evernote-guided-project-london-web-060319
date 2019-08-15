import React, { Component } from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

class Content extends Component {
  renderContent = (
    selectedNote,
    viewMode,
    setViewMode,
    clearSelectedNote,
    updateNote,
    deleteNote
  ) => {
    if (selectedNote && !viewMode) {
      return (
        <NoteEditor
          selectedNote={selectedNote}
          updateNote={updateNote}
          deleteNote={deleteNote}
          setViewMode={setViewMode}
        />
      );
    } else if (selectedNote && viewMode) {
      return (
        <NoteViewer
          selectedNote={selectedNote}
          setViewMode={setViewMode}
          clearSelectedNote={clearSelectedNote}
        />
      );
    } else {
      return <Instructions />;
    }
  };

  render() {
    const {
      selectedNote,
      viewMode,
      setViewMode,
      clearSelectedNote,
      updateNote,
      deleteNote
    } = this.props;

    return (
      <div className="master-detail-element detail">
        {this.renderContent(
          selectedNote,
          viewMode,
          setViewMode,
          clearSelectedNote,
          updateNote,
          deleteNote
        )}
      </div>
    );
  }
}

export default Content;
