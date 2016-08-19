import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const NavBarRouteMapperLeftButton = (route, navigator, index, navState) => {
  switch (route.id) {
    case 'calcServingPerDay':
    return (
      <TouchableOpacity
      onPress={() => {
        navigator.pop();
      }}
      style={styles.button}>
      <Text style={styles.text}>
      Back
      </Text>
      </TouchableOpacity>
    );
    case 'servingSize':
    return (
      <TouchableOpacity
      onPress={() => {
        navigator.pop();
      }}
      style={styles.button}>
      <Text style={styles.text}>
      Close
      </Text>
      </TouchableOpacity>
    );
    default:
    return null;
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginVertical: 10,
  },
  button: {
    paddingLeft: 10,
  },
});

export default NavBarRouteMapperLeftButton;
