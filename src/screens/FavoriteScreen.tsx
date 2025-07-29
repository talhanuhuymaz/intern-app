import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import useFavoriteStore from "../store/FavoriteStore";

const FavoriteScreen = () => {
  const favoriteRepos = useFavoriteStore((state) => state.favoriteRepos);

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteRepos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.repoCard}>
            <Text style={styles.repoName}>{item.name}</Text>
            <Text style={styles.repoUser}> {item.owner.login}</Text>
            <Text style={styles.repoLang}>🧑‍💻 {item.language || "Unknown"}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  repoUser: {
    fontSize: 14,
    color: "#2a4d8f",
    marginTop: 4,
    fontStyle: "italic",
    paddingBottom:5
  },
  repoCard: {
    backgroundColor: "#ffffffff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  repoName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333333",
    paddingBottom:10
  },
  repoLang: {
    fontSize: 14,
    color: "#666666",
    marginTop: 6,
    fontStyle: "italic",
  },
});
