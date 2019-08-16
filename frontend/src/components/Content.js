import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {

  renderContent = (note, viewMode) => {
    
    if (note && !viewMode) {
      return <NoteEditor selectedNote={note} updateNote={this.props.updateNote} setViewMode={this.props.setViewMode} deleteNote={this.props.deleteNote}/>;
    } else if (note && viewMode) {
      return <NoteViewer note={note} setViewMode={this.props.setViewMode} clearSelectedNote={this.props.clearSelectedNote}/>;
    } else {
      return <Instructions />;
    }
  }

  render() {
    const {selectedNote, viewMode} = this.props
    return (
      <div className='master-detail-element detail'>
        {this.renderContent(selectedNote, viewMode)}
      </div>
    );
  }
}

export default Content;
