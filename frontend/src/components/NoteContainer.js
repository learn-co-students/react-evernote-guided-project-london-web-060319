import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

const notesURL = 'http://localhost:3000/api/v1/notes'

class NoteContainer extends Component {

  state ={
    notes: [],
    selectedNoteId: null,
    searchedTitle: ""
  }

  handleClick = (noteId) => {
    this.setState({selectedNoteId: noteId})
  }

  handleSubmit = (event, note) => {
    event.preventDefault()
    fetch(notesURL + `/${this.state.selectedNoteId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: note.title,
        body: note.body,
        user_id: note.userId
      })
    })
    .then(resp => resp.json())
    .then(resp => this.updatePatchNotesOnPage(resp))
  }

  handleCreateNewNote = (event) => {
    event.preventDefault()
    fetch(notesURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: "default",
        body: "placeholder",
        user_id: 1
      })
    })
    .then(resp => resp.json())
    .then(resp => this.updatePatchNotesOnPage(resp))
  }

  updatePatchNotesOnPage = (updatedNote) => {
    const notesWithoutUpdated = this.state.notes.filter(note => note.id !== this.state.selectedNoteId)
    this.setState({notes: [updatedNote, ...notesWithoutUpdated]})
  }

  componentDidMount() {
    return fetch(notesURL)
    .then(resp => resp.json())
    .then(notes => this.setState({notes}))
  }

  cancelChanges = () => { 
    this.setState({selectedNoteId: null})
  }

  handleFilterSearch = (event) => {
    this.setState({searchedTitle: event.target.value})
  }

  filterNotes = () => {
    if (this.state.searchedTitle) {
      return this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.searchedTitle.toLowerCase()))
    } else {
      return this.state.notes
    }
  }
 
  render() {
    return (
      <Fragment>
        <Search 
          notes={this.state.notes} 
          searchedTitle={this.state.searchedTitle}
          handleFilterSearch={this.handleFilterSearch}
        />
        <div className='container'>
          <Sidebar 
            handleClick={this.handleClick} 
            notes={this.filterNotes()} 
            handleCreateNewNote={this.handleCreateNewNote}
          />
          <Content 
            handleSubmit={this.handleSubmit} 
            note={this.state.notes.find(n => n.id === this.state.selectedNoteId)} 
            cancelChanges={this.cancelChanges}
          />
        </div>
      </Fragment>
    );
  }
}
export default NoteContainer;
