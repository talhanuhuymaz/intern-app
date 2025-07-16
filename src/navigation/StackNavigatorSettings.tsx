import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

export type ProfileStackParamList = {
  ProfilePage: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const StackNavigatorSettings = () => {
    return (
            <Stack.Navigator >
                <Stack.Screen
                    name="ProfilePage"
                    component={ProfileScreen}
                    options={{ title: 'Profile' }}

                />
                <Stack.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{ title: 'Settings' }}
                />
        
            </Stack.Navigator>
    )
};

export default StackNavigatorSettings;