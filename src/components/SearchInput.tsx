// components/SearchInput.tsx
import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import UserStore from "../store/UserStore";

const SearchInput = () => {
  const username = UserStore((state) => state.username);
  const setUsername = UserStore((state) => state.setUsername);

  const giveSearch = () => {
    console.log("Searching for:", username);
  };

  return (
    <View style={styles.row}>
      <TextInput
        style={styles.input}
        placeholder="Write your Github Username"
        value={username}
        onChangeText={setUsername}
      />
      <View style={styles.button}>
        <Button title="Search" onPress={giveSearch} />
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: '50%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    margin:10
  },
  button: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#ccc',
    padding: 5,
    alignItems: 'center',
  }
});