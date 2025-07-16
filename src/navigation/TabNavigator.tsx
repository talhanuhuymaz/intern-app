import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import StackNavigatorSettings from './StackNavigatorSettings';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Search"
                    component={SearchScreen}
                    options={{
                            tabBarIcon: ({ color, size }) => (
                            <Ionicons name="search" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={StackNavigatorSettings}
                    options={{
                            headerShown:false,
                            tabBarIcon: ({ color, size }) => (
                            <Ionicons name="person" size={size} color={color} />
                        ),
                        
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
};

export default TabNavigator;