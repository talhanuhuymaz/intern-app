import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import useRepoStore from '../store/RepoStore';
import { useRoute } from '@react-navigation/native';

type RouteParams = {
  username: string;
  
}
const RepoScreen = () => {
  const route = useRoute();
  const { username } = route.params as RouteParams;
  
  const searchRepo = useRepoStore((state) => state.searchRepo);
  const repoResult = useRepoStore((state) => state.repoResult);

  useEffect(()=> {
    searchRepo(username)
  },[]);


  return (
    <FlatList
      data={repoResult}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      )}
    />
  );
};

export default RepoScreen;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
