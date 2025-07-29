import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SearchStackParamList } from "../navigation/StackNavigatorSearch"; 



const RepoItem = ({
  name,
  repo
}: {
  name: string;
  repo: any;
}) => { 
  const navigation = useNavigation<NativeStackNavigationProp<SearchStackParamList>>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('RepositoryDetails', { repo })}>
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>{name}</Text>
      </View>
      <Text style={styles.arrow}>➜</Text>
    </View>
    </TouchableOpacity>
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  arrow: {
    fontSize: 16,
    color: "#a1a1a1ff"
  }
});
