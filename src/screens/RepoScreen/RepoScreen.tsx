import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList } from "react-native";
import RepoItem from "../../components/RepoItem";
import useRepoStore from "../../store/RepoStore";

type RouteParams = {
  username: string;
};

const RepoScreen = () => {
  const route = useRoute();
  const { username } = route.params as RouteParams;
  
  const {clearRepos,searchRepo,repoResult} = useRepoStore();


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
          repo={item}
        />
      )}
    />
  );
};

export default RepoScreen;

//alt+shift+o  deletes unused imports
