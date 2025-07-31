import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import useFavoriteStore from "../../store/FavoriteStore";
import styles from "./style";
import { Linking } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";

const RepositoryDetailsScreen = ({ route }: any) => {
  const { repo } = route.params;

  const addToFavorites = useFavoriteStore((state) => state.addToFavorites);
  const isFav = useFavoriteStore(state => state.favoriteRepos.some(r => r.id === repo.id));

  //confetti
  const [showConfetti, setShowConfetti] = useState(false);

  const onAddFavorite = () => {
    isFav ?  setShowConfetti(false)  :  setShowConfetti(true);
    addToFavorites(repo)
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{repo.name}</Text>
        </View>

        <Text style={styles.description}>
          {repo.description || "No Description."}
        </Text>

        <View style={styles.infoRow}>
          <Text style={styles.label}>🧑‍💻 Language:</Text>
          <Text style={styles.value}>{repo.language || "Unknown"}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>⭐ Stars:</Text>
          <Text style={styles.value}>{repo.stargazers_count}</Text>
        </View>

        <TouchableOpacity onPress={() => Linking.openURL(repo.html_url)}>
          <Text style={styles.url}>🌐 View on GitHub </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.fav} onPress={onAddFavorite}>
        <Text style={styles.favText}>Save To Favorites</Text>
        <Text style={styles.favoriteIcon}>{isFav ? "★" : "☆"}</Text>
      </TouchableOpacity>

      {showConfetti && (
        <ConfettiCannon
          count={80}
          origin={{ x: 150, y: 0 }}
          fadeOut={true}
          onAnimationEnd={() => setShowConfetti(false)}
        />
      )}
    </ScrollView>
  );
};

export default RepositoryDetailsScreen;
