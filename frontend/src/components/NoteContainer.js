import React, { Component, Fragment } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";
const notes = "http://localhost:3000/api/v1/notes";

class NoteContainer extends Component {
  state = {
    notes: [],
    content: [],
    renderContent: false,
    searchTerm:""
  };

  componentDidMount() {
    fetch(notes)
      .then(resp => resp.json())
      .then(res =>
        this.setState({
          notes: res
        })
      );
  }

  handleSaveClick = (e, note) => {
    e.preventDefault();

    const editedNote = {
      title: e.target.title.value,
      body: e.target.body.value
    };

    fetch(notes + "/" + `${note.id}`, {
      method: "PATCH", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(editedNote) // body data type must match "Content-Type" header
    })
      .then(response => response.json())
      .then(res => {
        const updatedNotes = this.state.notes.map(noteCurr => {
          return noteCurr.id !== note.id ? noteCurr : res;
        });

        this.setState({
          notes: updatedNotes,
          renderContent: false
        });
      });
  };

  handleNoteClick = note => {
    this.setState({
      content: note,
      renderContent: true
    });
  };

  createNote=()=>{
    fetch(notes, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "default",
        body:'danielle the beast'
      }) 
    })
    .then(resp => resp.json())
    .then(note => {
      this.setState({
        notes: [
          ...this.state.notes,
          note
        ]
      })
    })
  }

filterNotesHandler=(e)=>{
this.setState({
  searchTerm: e.target.value
})
}

filteredNotes=()=>{
return this.state.notes.filter(note=>note.title.includes(this.state.searchTerm))
}

  render() {

    const notes=this.filteredNotes()
    return (
      <Fragment>
        <Search filterNotesHandler={this.filterNotesHandler}/>
        <div className="container">
          <Sidebar
            handleNoteClick={this.handleNoteClick}
            notes={notes}
            createNote={this.createNote}
          />
          <Content
            handleSaveClick={this.handleSaveClick}
            renderContent={this.state.renderContent}
            note={this.state.content}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
