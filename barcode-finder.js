import React, {
  Component,
  PropTypes,
} from 'react';
import {
  Platform,
  StyleSheet,
  View,
} from 'react-native';

class BarcodeFinder extends Component {
  constructor(props) {
    super(props);
  }

  getSizeStyles() {
    return ({
      width: this.props.width,
      height: this.props.height
    });
  }

  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.finder, this.getSizeStyles()]}>
          <View style={[
            color: this.props.color,
            styles.topLeftEdge,
            {
              borderLeftWidth: this.props.borderWidth,
              borderTopWidth: this.props.borderWidth,
            }
          ]} />
          <View style={[
            color: this.props.color,
            styles.topRightEdge,
            {
              borderRightWidth: this.props.borderWidth,
              borderTopWidth: this.props.borderWidth,
            }
          ]} />
          <View style={[
            color: this.props.color,
            styles.bottomLeftEdge,
            {
              borderLeftWidth: this.props.borderWidth,
              borderBottomWidth: this.props.borderWidth,
            }
          ]} />
          <View style={[
            color: this.props.color,
            styles.bottomRightEdge,
            {
              borderRightWidth: this.props.borderWidth,
              borderBottomWidth: this.props.borderWidth,
            }
          ]} />
        </View>
      </View>
    );
  }
};

BarcodeFinder.propTypes = {
  borderWidth: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  finder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  topLeftEdge: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  topRightEdge: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  bottomLeftEdge: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  bottomRightEdge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

module.exports = BarcodeFinder;
