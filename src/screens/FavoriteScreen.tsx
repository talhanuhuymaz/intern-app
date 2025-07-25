import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Fav Screen</Text>
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
