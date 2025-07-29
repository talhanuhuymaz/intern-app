import React from "react";
import { FlatList } from "react-native";
import useUserSearchStore from "../store/userSearchStore";
import UserCardItem from "./UserCardItem";

function UserSearchList() {
  const searchResult = useUserSearchStore((state) => state.searchResult);

  if (searchResult.length === 0) return null;

  return (
    <FlatList
      style={{ paddingHorizontal: 16 }}
      data={searchResult}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <UserCardItem user={item} />}
      /* showsVerticalScrollIndicator={false} */ // Hide scrollbar vertically
    />
  );
}

export default UserSearchList;
