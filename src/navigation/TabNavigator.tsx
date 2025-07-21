import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigatorSearch from './StackNavigatorSearch';
import StackNavigatorProfile from './StackNavigatorProfile';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Search"
                    component={StackNavigatorSearch}
                    options={{
                            headerShown:false,
                            tabBarIcon: ({ color, size }) => (
                            <Ionicons name="search" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={StackNavigatorProfile}
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