import React from "react";
import { FlatList, Text, View } from "react-native";
import useUserSearchStore from "../store/userSearchStore";
import UserCardItem from "./UserCardItem";

function UserSearchList() {
  const { searchResult, hasSearched } = useUserSearchStore();

  return (
    <FlatList
      style={{ paddingHorizontal: 16 }}
      data={searchResult}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <UserCardItem user={item} />}
      showsVerticalScrollIndicator={false} // Hide scrollbar vertically
      ListEmptyComponent={
        // it provide user feedback when no results are found
        hasSearched ? (
          <View style={{ padding: 16, alignItems: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              No users found !
            </Text>
          </View>
        ) : null
      }
    />
  );
}

export default UserSearchList;
