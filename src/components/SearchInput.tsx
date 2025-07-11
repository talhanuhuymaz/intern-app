// components/SearchInput.tsx
import React from "react";
import { View, TextInput, Button, StyleSheet, Keyboard, Text } from "react-native";
import UserStore from "../store/UserStore";

const SearchInput = () => {

    const username = UserStore((state) => state.username);
    const setUsername = UserStore((state) => state.setUsername);

    const giveSearch = () => {
        Keyboard.dismiss();
        console.log("Searching for:", username);
        
       /*  fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            console.log('data', data.followers)
        })  */

        console.log('selam')
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
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        padding: 10,
        margin: 10
    },
    button: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#ccc',
        padding: 5,
        alignItems: 'center',
    }
});