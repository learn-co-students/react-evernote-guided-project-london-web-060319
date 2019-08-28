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

  state = {
    editClicked: false
  }

  handleEdit = (noteId) => {
  console.log('i was clicked')
  this.setState({editClicked: !this.state.editClicked})
}

   renderContent = () => {
    if (this.props.note && this.state.editClicked) {
      return <NoteEditor handleSubmit={this.props.handleSubmit} note={this.props.note} handleEdit={this.handleEdit} cancelChanges={this.props.cancelChanges}/>;
    } else if (this.props.note) { 
      return <NoteViewer handleEdit={this.handleEdit} note={this.props.note}/>;
    } else {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
