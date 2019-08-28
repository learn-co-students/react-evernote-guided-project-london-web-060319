import React, { Component } from 'react';

class NoteEditor extends Component {

  state = {
    id: this.props.note.id,
    title: this.props.note.title,
    body: this.props.note.body,
    userId: this.props.note.user.id
  }

  componentDidUpdate() {
    if (this.props.note.id !== this.state.id) {
      this.setState({
        id: this.props.note.id,
        title: this.props.note.title,
        body: this.props.note.body,
        userId: this.props.note.user.id
      })
    }
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  render() {
    return (
      <form onSubmit={(e) => this.props.handleSubmit(e, this.state)} className="note-editor">
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
        <textarea name="body" value={this.state.body} onChange={this.handleChange}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={this.props.cancelChanges}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
