import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions';



class ListItem extends Component {
  componentWillUpdate = () => {
    LayoutAnimation.spring();
  }

  renderDescription = () => {
    const { library, expanded} = this.props;
    if ( expanded ) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            { library.description }
          </Text>
        </CardSection>
      );
    }
  }

  render(){
    const { library, selectLibrary } = this.props;
    const { id, title } = library;
    const { titleStyle } = styles;
    return(
      <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
        <View>
          <CardSection>
           <Text style={ titleStyle }>
             { title }
           </Text>
          </CardSection>
          { this.renderDescription() }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = ({ selectedLibraryId }, { library }) => {
  const expanded = selectedLibraryId === library.id
  return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem);
