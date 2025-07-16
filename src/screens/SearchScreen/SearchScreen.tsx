import React from "react";
import { View, StyleSheet} from 'react-native';
import SearchInput from "../../components/SearchInput";
import UserCard from "../../components/UserCard";
import styles from "./styles";


const SearchScreen = () => {
  return (
    
    <View style={styles.container}>
      <SearchInput />
      <UserCard />
    </View>
  );
};

export default SearchScreen;



