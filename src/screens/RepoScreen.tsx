import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RepoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Repositories Screen</Text>
    </View>
  );
};

export default RepoScreen;

const styles = StyleSheet.create({
  container: {
     flex: 1, 
     justifyContent: 'center', 
     alignItems: 'center' },
});

