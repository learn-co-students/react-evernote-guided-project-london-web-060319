import React, { Component } from 'react';

class NoteEditor extends Component {
  state={
    title: this.props.selectedNote.title,
    body: this.props.selectedNote.body,
    id: this.props.selectedNote.id
  }
  
  editNote = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault()
    this.props.updateNote(this.state)
  }


  render() {
    return (
      <form className="note-editor" onSubmit={e => this.handleSubmit(e)}>
        <div className="button-row">
          <button type="button" onClick={this.props.setViewMode}>Cancel</button>
          <button type="button" onClick={() => this.props.deleteNote(this.state.id)}>Delete</button>
          <input className="button" type="submit" value="Save" />
        </div>
        <input type="text" name="title" onChange={this.editNote} value={this.state.title}/>
        <textarea name="body" onChange={this.editNote} value={this.state.body}/>
        
      </form>
    );
  }
}

export default NoteEditor;
