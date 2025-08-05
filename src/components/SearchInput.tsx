// components/SearchInput.tsx
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import useUserSearchStore from "../store/userSearchStore";


const SearchInput = () => {
    const [input, setInput] = useState("");
    const {searchUser} = useUserSearchStore();

    return (
        <View style={styles.row}>
            <TextInput
                style={styles.input}
                placeholder="Search a GitHub username"
                value={input}
                clearButtonMode="always"
                onChangeText={(text) => {
                    const trimmedText = text.trim();
                    setInput(text);
                    searchUser(trimmedText);
                }}
            />
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
        padding: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        margin: 5,
        fontSize: 16,
        fontWeight: '600',
        paddingVertical: 14,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
    },
    searchBtn: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#ccc',
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
    },
    btnText: {
        fontSize: 14,
        fontWeight:'bold'
    },
    clear: {
        borderRadius: 20,
        borderColor: '#ccc',
        padding: 5,
        fontSize: 14,
        fontWeight:'bold'
    }
});