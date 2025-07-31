import React from "react";
import { View, Text, FlatList, StyleSheet,TouchableOpacity  } from "react-native";
import useFavoriteStore from "../store/FavoriteStore";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SearchStackParamList } from "../navigation/StackNavigatorSearch"; 


const FavoriteScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<SearchStackParamList>>();
  const favoriteRepos = useFavoriteStore((state) => state.favoriteRepos);
  const removeFromFavorites = useFavoriteStore((state) => state.removeFromFavorites);

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteRepos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.repoCard} onPress={() => navigation.navigate("RepositoryDetails", { repo: item })}>
            <View style={styles.row}>
              <View style={{ flex: 1 }}>
                <Text style={styles.repoName}>{item.name}</Text>
                <Text style={styles.repoUser}>👤 {item.owner.login}</Text>
                <Text style={styles.repoLang}>🧑‍💻 {item.language || "Unknown"}</Text>
              </View>
              <Text style={styles.removeButton} onPress={() => removeFromFavorites(item.id)}>X</Text>
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
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
  repoCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  repoName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    paddingBottom: 10,
  },
  repoUser: {
    fontSize: 14,
    color: "#2a4d8f",
    marginTop: 4,
    fontStyle: "italic",
    paddingBottom: 5,
  },
  repoLang: {
    fontSize: 14,
    color: "#666",
    marginTop: 6,
    fontStyle: "italic",
  },
  removeButton: {
    fontSize: 20,
    color: "#d9534f",
    marginLeft: 10,
    padding: 8,
  },
});