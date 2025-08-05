import React from "react";
import { View, Text, FlatList, StyleSheet,TouchableOpacity  } from "react-native";
import styles from "./styles";
import useFavoriteStore from "../../store/FavoriteStore";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SearchStackParamList } from "../../navigation/StackNavigatorSearch"; 


const FavoriteScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<SearchStackParamList>>();
  const {favoriteRepos,removeFromFavorites} = useFavoriteStore();

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
              
              <TouchableOpacity style={styles.removeButton} onPress={() => removeFromFavorites(item.id)}>
                <Text style={styles.removeButtonText}>✖</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FavoriteScreen;
