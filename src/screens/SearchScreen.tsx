import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const SearchScreen = () => {
  const [username, setUsername] = useState('');

  const giveSearch = () => {
    console.log("Searching for user:", username);
  };

  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>

      <TextInput
        style={styles.input}
        placeholder="Write your Github Username"
        value={username}
        onChangeText={setUsername}
      />

      <Button title="Search" onPress={giveSearch} />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '50%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    margin:10
  }
});

