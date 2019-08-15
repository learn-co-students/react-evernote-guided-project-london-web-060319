import React, { Component } from "react";

class NoteEditor extends Component {
  state = {
    title: "",
    body: ""
  };

  handleFormChange=(event)=>{

this.setState({
  [event.target.name]: event.target.value
})
  }

  render() {
    return (
      <form onSubmit={(e)=>this.props.handleSaveClick(e,this.props.note)}className="note-editor">
        <input onChange={this.handleFormChange} defaultValue={this.props.note.title} placeholder={this.props.note.title} type="text" name="title" />
        <textarea  onChange={this.handleFormChange} defaultValue={this.props.note.body} name="body" />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button onClick={this.props.handleCancelClick} type="button">
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
