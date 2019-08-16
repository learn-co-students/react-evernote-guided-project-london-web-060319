import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';
import API from '../adapters/API'

class NoteContainer extends Component {
  state = {
    notes: [],
    query: "",
    selectedNote: null,
    viewMode: true
  }
  
  componentDidMount(){
    API.fetchData().then(notes => this.setState({notes: notes}))
  }
  
  selectNote = note => {
    this.setState({selectedNote: note, viewMode: true})
  }

  clearSelectedNote = () => {
    this.setState({
      selectedNote: null
    })
  }

  setViewMode = () => {
    this.setState({
      viewMode: !this.state.viewMode
    })
  }

updateNote = noteObj => {
   API.editData(noteObj).then(note =>
     this.setState({
       notes: this.state.notes.map(n => (n.id === note.id ? note : n)),
       viewMode: !this.state.viewMode,
       selectedNote: note
     })
   );
 };
  
 addNote = () => {
   API.postData().then(note => this.setState({
     notes: [...this.state.notes, note], 
     selectedNote: note,
     viewMode: false
   })
   )}

   deleteNote = id => {
     API.deleteData(id);
     this.setState({
       selectedNote: null,
        notes: this.state.notes.filter(note => note.id !== parseInt(id))
     })
   }

   setQuery = e => {
      this.setState({
        query: e.target.value
      })
   }

   filterNotes = () => {
     return this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.query.toLowerCase()))
   }

   sortNotes = filteredNotes => filteredNotes.sort((noteA, noteB) => { return noteB.id - noteA.id})
   


  render() {
    const {notes, selectedNote, viewMode, query} = this.state
    const filteredNotes = this.filterNotes()
    const sortedNotes = this.sortNotes(filteredNotes)

    return (
      <Fragment>
        <Search setQuery={this.setQuery} query={query}/>
        
        <div className='container'>
          
          <Sidebar notes={sortedNotes}
           selectNote={this.selectNote} 
           addNote={this.addNote}/>
          
          <Content selectedNote={selectedNote}
           viewMode={viewMode} 
           setViewMode={this.setViewMode} 
           clearSelectedNote={this.clearSelectedNote}
           updateNote={this.updateNote}
           deleteNote={this.deleteNote}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
