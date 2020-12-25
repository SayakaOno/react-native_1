import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 200
  },
  viewOneStyle: {
    borderWidth: 4,
    borderColor: 'red',
    backgroundColor: 'pink',
    height: 100,
    width: 100
  },
  viewTwoStyle: {
    borderWidth: 4,
    borderColor: 'green',
    backgroundColor: 'lightgreen',
    height: 100,
    width: 100,
    alignSelf: 'flex-end'
    // marginTop: 100
  },
  viewThreeStyle: {
    borderWidth: 4,
    borderColor: 'blue',
    backgroundColor: 'lightblue',
    height: 100,
    width: 100
  }
});

export default BoxScreen;
