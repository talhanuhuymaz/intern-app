import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from "../screens/SearchScreen/SearchScreen";
import RepoScreen from "../screens/RepoScreen";

export type SearchStackParamList = {
  SearchPage: undefined;
  Repositories: undefined;
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
                    options={{ title: 'Repos' }}
                />
        
            </Stack.Navigator>
    )
};

export default StackNavigatorSearch