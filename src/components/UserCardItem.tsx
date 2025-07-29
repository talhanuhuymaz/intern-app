import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { GitHubUser } from "../store/types/GitUserType";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SearchStackParamList } from "../navigation/StackNavigatorSearch";

type Props = {
  user: GitHubUser;
};

function UserCardItem({ user }: Props) {
  const navigation =
    useNavigation<NativeStackNavigationProp<SearchStackParamList>>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Repositories", { username: user.login })}>
      <View style={styles.card}>
        
        <View style={styles.userInfoRow}>
          <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
          <Text style={styles.name}>{user.login}</Text>
        </View>

        <TouchableOpacity
          style={styles.repoButton}
          onPress={() => navigation.navigate("Repositories", { username: user.login })}>
          <Text style={styles.repoButtonText}>Repositories</Text>
        </TouchableOpacity>

      </View>
    </TouchableOpacity>
  );
}

export default UserCardItem;

const styles = StyleSheet.create({
  card: {
    minWidth: 400,
    width: "100%",
    marginTop: 10,
    marginBottom:10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  userInfoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  repoButton: {
    width: 80,      
    height: 40,        
    borderRadius: 25,  
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  repoButtonText: {
    color: "#fff",
    fontSize: 10,
  },
});
