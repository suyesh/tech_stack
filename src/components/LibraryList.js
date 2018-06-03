import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render(){
    return;
  }
}

const mapStateToProps = ({ libraries }) => {
  libraries: libraries
}

export default connect(mapStateToProps)(LibraryList);
