import React, { Component } from "react";
import NoteList from "./NoteList";

class Sidebar extends Component {
  render() {
    const { notes, selectNote, deleteNote  } = this.props;
    return (
      <div className="master-detail-element sidebar">
        <button onClick={this.props.addNote} className="new-button">
          New
        </button>
        <NoteList notes={notes} selectNote={selectNote} deleteNote={deleteNote} />
      </div>
    );
  }
}

export default Sidebar;
