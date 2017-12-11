import React, { Component } from 'react';
// this connects this react component with redux essentially propmoting it into a container
import { connect } from 'react-redux'
//import this action
import { selectBook } from  '../actions/index';
//binds the action creatoe
import { bindActionCreators } from 'redux'

 class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
        return (
            <li
              onClick = {() => this.props.selectBook(book)}
              key = {book.title}
              className = "list-group-item">
              {book.title}
            </li>
        )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // whatever gets returned here will show up as props inside of Booklist
  return {
    books: state.books
  }
}

// any thing returned throught this function will end up as props on the booklist container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all of out reducers
  return bindActionCreators({selectBook : selectBook}, dispatch)
}

// if the state changes for any reason this container will instantly rerender with the updated state and the object in the state function will be assigned as props to the component -it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
