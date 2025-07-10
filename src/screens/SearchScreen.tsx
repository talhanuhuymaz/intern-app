import React from "react";
import { View, StyleSheet} from 'react-native';
import SearchInput from "../components/SearchInput";


const SearchScreen = () => {
  return (
    
    <View style={styles.container}>
      <SearchInput />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
});

