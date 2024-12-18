import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
    );
}

function DiscoverScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
    );
}

function AstroShopScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
    );
}

function ProfileScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
    );
}

export default function App() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home'; // Filled icon
                    } else if (route.name === 'Discover') {
                        iconName = 'compass'; // Filled icon
                    } else if (route.name === 'AstroShop') {
                        iconName = 'bag'; // Filled icon
                    } else if (route.name === 'Profile') {
                        iconName = 'person'; // Filled icon
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#000', // Active icon color set to white
                tabBarInactiveTintColor: '#fff', // Inactive icon color set to white
                tabBarStyle: { backgroundColor: '#FFA500' }, // Tab bar background color
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Discover" component={DiscoverScreen} options={{ headerShown: false }} />
            <Tab.Screen name="AstroShop" component={AstroShopScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}
