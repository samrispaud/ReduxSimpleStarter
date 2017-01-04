import React, { Component } from 'react';
import { connect } from 'react-redux';

import { add, substract } from '../actions/index';
import { bindActionCreators } from 'redux';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>My Counter</div>
        <h1>14</h1>
        <hr></hr>
        <button>+</button>
        <button>-</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  // Whatever is returned will show up as props
  return {
    textBox: state.textBox
  };
}

// Anything returned from this function will end up as props
function mapDispatchToProps(dispatch) {
  console.log('mapDispatchToProps', dispatch);
  return bindActionCreators({ updateTextBox: updateTextBox }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
