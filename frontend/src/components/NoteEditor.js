import React, { Component } from "react";

class NoteEditor extends Component {
  constructor(props) {
    super(props);
    const { selectedNote } = props;
    this.state = {
      title: selectedNote.title,
      body: selectedNote.body,
      id: selectedNote.id
    };
  }

  editNote = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateNote(this.state);
  };

  render() {
    return (
      <form className="note-editor" onSubmit={this.handleSubmit}>
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={this.props.setViewMode}>
            Cancel
          </button>
          <button onClick={() => this.props.deleteNote(this.state.id)}>Delete</button>

        </div>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.editNote}
        />
        <textarea
          name="body"
          onChange={this.editNote}
          value={this.state.body}
        />
      </form>
    );
  }
}

export default NoteEditor;
