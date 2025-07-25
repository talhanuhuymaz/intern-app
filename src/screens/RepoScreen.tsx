import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList } from "react-native";
import RepoItem from "../components/RepoItem";
import useFavoriteStore from "../store/FavoriteStore";
import useRepoStore from "../store/RepoStore";

type RouteParams = {
  username: string;
};

const RepoScreen = () => {
  const route = useRoute();
  const { username } = route.params as RouteParams;

  const clearRepos = useRepoStore((state) => state.clearRepos);
  const searchRepo = useRepoStore((state) => state.searchRepo);
  const repoResult = useRepoStore((state) => state.repoResult);

  //Favorite Store
  const addToFavorites = useFavoriteStore((state) => state.addToFavorites);
  const isFavorite = useFavoriteStore((state) => state.isFavorite);
  const favoriteIds = useFavoriteStore((state) => state.favoriteIds);

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
        <RepoItem
          name={item.name}
          isFavorite={isFavorite(item.id)}
          id={item.id}
          onAddToFavorite={() => addToFavorites(item.id)}
        />
      )}
    />
  );
};

export default RepoScreen;

//alt+shift+o  deletes unused imports
