import React, { Component } from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {
  state = {
    edit: false
  };

  handleEditClick = () => {
    this.setState({
      edit: !this.state.edit
    });
  };

  handleCancelClick=()=>{
    this.setState({
      edit: false
    })
  }

  renderContent = props => {
    if (this.props.renderContent) {
      if (this.state.edit) {
        return <NoteEditor handleSaveClick={this.props.handleSaveClick} note={this.props.note} handleCancelClick={this.handleCancelClick}/>;
      }

      return (
        <div>
          <NoteViewer
            handleEditClick={this.handleEditClick}
            note={this.props.note}
          />
        </div>
      );
    }
    return <Instructions />;
  };

  render() {
    return (
      <div className="master-detail-element detail">{this.renderContent()}</div>
    );
  }
}

export default Content;
