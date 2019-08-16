import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    
    
    const {notes, selectNote} = this.props
    return (
      <div className='master-detail-element sidebar'>
         <button onClick={this.props.addNote}>New</button>
         <br /><br />
        <NoteList notes={notes} selectNote={selectNote}/>
      </div>
    );
  }
}

export default Sidebar;
