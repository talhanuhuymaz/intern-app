import { useNavigation } from "@react-navigation/native";
import {createNativeStackNavigator,NativeStackNavigationProp} from "@react-navigation/native-stack";
import React, { useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native-gesture-handler";
import FavoriteScreen from "../screens/FavoriteScreen";
import RepositoryDetailsScreen from "../screens/RepoDetailScreen/RepoDetailsScreen";
import RepoScreen from "../screens/RepoScreen";
import SearchScreen from "../screens/SearchScreen/SearchScreen";
import UserDetailsScreen from "../screens/UserDetailsScreen";

export type SearchStackParamList = {
  SearchPage: undefined;
  Repositories: { username: string };
  RepositoryDetails: { repo: any };
  Favorites: undefined;
  UserDetails: { username: string };
};

const Stack = createNativeStackNavigator<SearchStackParamList>();

const StackNavigatorSearch = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchPage"
        component={SearchScreen}
        options={{
          title: "Search",
          headerRight: () => (
            <TouchableOpacity onPress={()=> navigation.navigate('Search',{screen:'Favorites'})}>
              <Text>ᯓ★</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{ title: "Favorites", headerTintColor: "black" }}
      />
      <Stack.Screen
        name="Repositories"
        component={RepoScreen}
        options={{ title: "Repositories", headerTintColor: "black" }}
      />
      <Stack.Screen
        name="RepositoryDetails"
        component={RepositoryDetailsScreen}
        options={{ title: "Repo Details", headerTintColor: "black" }}
      />
      <Stack.Screen
        name="UserDetails"
        component={UserDetailsScreen}
        options={{ title: "User Details", headerTintColor: "black" }}
      />

    </Stack.Navigator>
  );
};

export default StackNavigatorSearch;
