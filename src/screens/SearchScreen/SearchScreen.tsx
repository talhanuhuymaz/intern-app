import React from "react";
import { View, StyleSheet} from 'react-native';
import SearchInput from "../../components/SearchInput";
import styles from "./styles";
import UserSearchList from "../../components/UserSearchList";


const SearchScreen = () => {
  return (
    
    <View style={styles.container}>
      <SearchInput />
      <UserSearchList />
    </View>
  );
};

export default SearchScreen;



