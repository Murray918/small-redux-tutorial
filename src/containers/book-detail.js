import React,  { Component } from 'react';
import { connect } from 'react-redux'

class BookDetail extends Component {
  render() {

    // without this conditional the initial state for this component will equall null because we set it in the active book reducer making you the mayor of error city
    if (!this.props.book){
      return <div>Select a Book to get started.</div>
    }

    return (
      <div>
        <h5>Details for:</h5>
        <div>{this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
