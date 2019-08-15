import React, { Component, Fragment } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";
import API from "../adapters/API";

class NoteContainer extends Component {
  state = {
    notes: [],
    query: "",
    selectedNote: null,
    viewMode: true
  };

  componentDidMount() {
    API.fetchData().then(notes =>
      this.setState({
        notes
      })
    );
  }

  selectNote = selectedNote => {
    this.setState({
      selectedNote,
      viewMode: true
    });
  };

  setViewMode = () => {
    this.setState({
      viewMode: !this.state.viewMode
    });
  };

  clearSelectedNote = () => {
    this.setState({
      selectedNote: null
    });
  };

  updateNote = noteObj => {
    API.patchData(noteObj).then(note =>
      this.setState({
        notes: this.state.notes.map(n => (n.id === note.id ? note : n)),
        viewMode: true
      })
    );
  };

  addNote = () => {
    console.log("add note");
    API.postData().then(note =>
      this.setState({
        notes: [...this.state.notes, note],
        selectedNote: note,
        viewMode: false
      })
    );
  };

  deleteNote = id => {
    API.deleteData(id).then(() =>
      this.setState({
        notes: this.state.notes.filter(note => note.id !== parseInt(id)),
        selectedNote: null,
        viewMode: true
      })
    );
  };

  setQuery = e => {
    this.setState({
      query: e.target.value
    });
  };

  filterNotes = () => {
    return this.state.notes.filter(note =>
      note.title.toLowerCase().includes(this.state.query.toLowerCase())
    );
  };

  sortNotes = filteredNotes =>
    filteredNotes.sort((noteA, noteB) => noteB.id - noteA.id);

  render() {
    const filteredNotes = this.filterNotes();

    const sortedNotes = this.sortNotes(filteredNotes);

    const { selectedNote, viewMode, query } = this.state;
    return (
      <Fragment>
        <Search setQuery={this.setQuery} query={query} />
        <div className="container">
          <Sidebar
            notes={sortedNotes}
            selectNote={this.selectNote}
            addNote={this.addNote}
            deleteNote={this.deleteNote}
          />
          <Content
            selectedNote={selectedNote}
            viewMode={viewMode}
            setViewMode={this.setViewMode}
            clearSelectedNote={this.clearSelectedNote}
            updateNote={this.updateNote}
            deleteNote={this.deleteNote}
            doCancel={this.doCancel}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
