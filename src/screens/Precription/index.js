//import liraries
import DropInput from '@components/DropInput';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Precription = () => {
  return (
    <View style={styles.container}>
      <DropInput />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Precription;
