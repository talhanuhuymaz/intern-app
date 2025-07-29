import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from "../screens/SearchScreen/SearchScreen";
import RepoScreen from "../screens/RepoScreen";
import RepoDetailsScreen from "../screens/RepoDetailScreen/RepoDetailsScreen";

export type SearchStackParamList = {
  SearchPage: undefined;
  Repositories: { username: string };
  RepositoryDetails: { repo: any }; 
};

const Stack = createNativeStackNavigator<SearchStackParamList>();

const StackNavigatorSearch = () => {
    return (
            <Stack.Navigator >
                <Stack.Screen
                    name="SearchPage"
                    component={SearchScreen}
                    options={{ title: 'Search' }}

                />
                <Stack.Screen
                    name="Repositories"
                    component={RepoScreen}
                    options={{ title: 'Repositories', headerTintColor: 'black' }}
                />
                  <Stack.Screen
                    name="RepositoryDetails"
                    component={RepoDetailsScreen}
                    options={{ title: 'Repo Details',  headerTintColor: 'black' }}
            />
        
            </Stack.Navigator>
    )
};

export default StackNavigatorSearch