import React from 'react';
import { View, Text, StyleSheet, Image,FlatList } from 'react-native';
import useUserSearchStore from '../store/userSearchStore';

function UserCard() {
  const searchResult = useUserSearchStore((state) => state.searchResult);

    
  if (searchResult.length === 0) return null;
  
  return (
    <FlatList
      data={searchResult}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.avatar_url }} style={styles.avatar} />
          <Text style={styles.name}>{item.login}</Text>
        </View>
      )}
    />
  );
};

export default UserCard;


const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'flex-start',
    minWidth:400,
    width: "100%",
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
