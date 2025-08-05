import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import Animated, { FadeIn, FadeInDown, FadeInUp } from "react-native-reanimated";
import { SearchStackParamList } from "../../navigation/StackNavigatorSearch";
import useUserDetailStore from "../../store/UserDetailStore";
import styles from "./styles";

type UserDetailRouteProp = RouteProp<SearchStackParamList, "UserDetails">;

const UserDetailsScreen = () => {
  const route = useRoute<UserDetailRouteProp>();
  const { username } = route.params;

  const { user, fetchUser } = useUserDetailStore();

  useEffect(() => {
    fetchUser(username);
  }, [username]);

  if (!user) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animated.Image
          entering={FadeIn.duration(600).delay(200)}
          style={styles.avatar}
          source={{ uri: user.avatar_url }}
        />

        <View style={styles.texts}>
          <Animated.Text
            entering={FadeInUp.duration(500).delay(300)}
            style={styles.name}
          >
            {user.name || user.login}
          </Animated.Text>

          <Animated.Text
            entering={FadeInDown.duration(500).delay(400)}
            style={styles.info}
          >
            👥 {user.followers} Followers • {user.following} Following
          </Animated.Text>

          <Animated.Text
            entering={FadeInDown.duration(500).delay(500)}
            style={styles.info}
          >
            📍 {user.location || "N/A"}
          </Animated.Text>

          <Animated.Text
            entering={FadeInDown.duration(500).delay(600)}
            style={styles.info}
          >
            📦 {user.public_repos} Repositories
          </Animated.Text>
        </View>
      </View>
    </View>
  );
};

export default UserDetailsScreen;
