import { View, Text } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { Tabs } from 'expo-router'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

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
                tabBarLabel: "Mediatate",
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons 
                    name="flower-tulip" 
                    size={24} 
                    color={color} 
                    />
                )  
            }}
        />

        <Tabs.Screen 
            name='affirmations' 
            options={{ 
                tabBarLabel: "Affirmations",
                tabBarIcon: ({ color }) => (
                    <FontAwesome 
                    name="envelope-open-o" 
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