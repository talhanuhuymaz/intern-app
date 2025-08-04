import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SearchStackParamList } from "../navigation/StackNavigatorSearch";
import useUserDetailStore from "../store/UserDetailStore";

type UserDetailRouteProp = RouteProp<SearchStackParamList, "UserDetails">;

const UserDetailsScreen = () => {
  const route = useRoute<UserDetailRouteProp>();
  const { username } = route.params;

  const user = useUserDetailStore((state) => state.user);
  const fetchUser = useUserDetailStore((state) => state.fetchUser);

  useEffect(() => {
    fetchUser(username);
  }, [username]);

  if (!user) return null;

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
      <Text style={styles.name}>{user.name || user.login}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
      <Text>Followers: {user.followers}</Text>
      <Text>Following: {user.following}</Text>
      <Text>Repos: {user.public_repos}</Text>
      <Text>Location: {user.location || "N/A"}</Text>
    </View>
  );
};

export default UserDetailsScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  bio: {
    fontStyle: "italic",
    marginVertical: 10,
    textAlign: "center",
  },
});
