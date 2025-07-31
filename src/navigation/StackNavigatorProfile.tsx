import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import RepositoryDetailsScreen from '../screens/RepoDetailScreen/RepoDetailsScreen';

export type ProfileStackParamList = {
  ProfilePage: undefined;
  Settings: undefined;
  Favorites: undefined;
  RepositoryDetails: { repo: any };
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const StackNavigatorProfile = () => {
    return (
            <Stack.Navigator >
                <Stack.Screen
                    name="ProfilePage"
                    component={ProfileScreen}
                    options={{ title: 'Profile' }}

                />
                <Stack.Screen
                    name="Favorites"
                    component={FavoriteScreen}
                    options={{ title: 'Favorites',headerTintColor: 'black'  }}
                />
                <Stack.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{ title: 'Settings',headerTintColor: 'black'  }}
                />
                <Stack.Screen
                    name="RepositoryDetails"
                    component={RepositoryDetailsScreen}
                    options={{ title: 'Repository Details', headerTintColor: 'black' }}
                />

        
        
            </Stack.Navigator>
    )
};

export default StackNavigatorProfile;