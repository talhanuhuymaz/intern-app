import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const RepoItem = ({
  name,
  isFavorite,
  id,
  onAddToFavorite,
}: {
  name: string;
  isFavorite: boolean;
  id: number;
  onAddToFavorite: (itemId: number) => void;
}) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>{name}</Text>
      </View>

      <View>
        <TouchableOpacity onPress={() => onAddToFavorite(id)}>
          <Text style={styles.fav}>{isFavorite ? "★" : "☆"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RepoItem;

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  fav: {
    fontSize: 25,
  },
});
