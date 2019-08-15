import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {

   
    return (
      <div className='master-detail-element sidebar'>
        <NoteList handleNoteClick={this.props.handleNoteClick} notes={this.props.notes} />
        <button onClick={this.props.createNote}>New</button>
      </div>
    );
  }
}

export default Sidebar;
