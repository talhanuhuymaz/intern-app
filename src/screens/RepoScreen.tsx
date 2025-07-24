import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import useRepoStore from '../store/RepoStore';
import { useRoute } from '@react-navigation/native';
import useTestStore from '../store/TestStore';

type RouteParams = {
  username: string;
};

const RepoScreen = () => {
  const route = useRoute();
  const { username } = route.params as RouteParams;

  const clearRepos = useRepoStore((state) => state.clearRepos);
  const searchRepo = useRepoStore((state) => state.searchRepo);
  const repoResult = useRepoStore((state) => state.repoResult);
  const addToFavorite = useRepoStore(state => state.addToFavorite);
  

  //PERSIST TEST
  const addABear = useTestStore(state => state.addABear);
  const removeBear = useTestStore(state => state.removeBear);
  const bears = useTestStore(state => state.bears);


  useEffect(() => {
    searchRepo(username);
    return () => {
      clearRepos();
    };
  }, []);


  return (
    <FlatList
      data={repoResult}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View>
            <Text style={styles.name}>{item.name}</Text>
          </View>

          <View>
            <TouchableOpacity onPress={() => addToFavorite(item.id)}>
              <Text style={styles.fav}>{item.favorites ? "★" : "☆"}</Text>
            </TouchableOpacity>
            <View>
            <TouchableOpacity onPress={() => addABear()}>
              <Text style={styles.fav}>+</Text>
            </TouchableOpacity>
            <Text style={styles.fav}>{bears}</Text>
            <TouchableOpacity onPress={() => removeBear()}>
              <Text style={styles.fav}>-</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    />
  );
};
console.log(useTestStore)
export default RepoScreen;

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  fav: {
    fontSize: 25,
  }
});
