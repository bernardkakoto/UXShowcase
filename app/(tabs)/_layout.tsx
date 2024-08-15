import { View, Text } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { Tabs } from 'expo-router'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs 
        screenOptions={{ 
            headerShown: false, 
            tabBarActiveTintColor: Colors.primary}}
    > 
        <Tabs.Screen 
            name='nature-meditate' 
            options={{ 
                tabBarLabel: "Hardware",
                tabBarIcon: ({ color }) => (
                    <Ionicons 
                    name="hardware-chip" 
                    size={24} 
                    color={color} 
                    />
                )  
            }}
        />

        <Tabs.Screen 
            name='affirmations' 
            options={{ 
                tabBarLabel: "Software",
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons 
                    name="application-braces" 
                    size={24} 
                    color="color" 
                    />
                )  
            }}
        />

    </Tabs>
    
  )
}

export default TabsLayout