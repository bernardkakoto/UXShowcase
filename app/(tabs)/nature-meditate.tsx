import { View, Text, FlatList, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import { StatusBar } from 'expo-status-bar'

import { MEDITATION_DATA } from '@/constants/MeditationData'
import MEDITATION_IMAGES from '@/constants/meditation-images'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'

const NatureMeditate = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2d", "#0a4d4a", "#766e67"]}>
        <View className='mb-6'>
          <Text className='text-gray-300 mb-3 font-bold text-4xl text-left'>
            In The Indigo Fields
          </Text>
          <Text className='text-indigo-300 mb-3 font-meduim text-xl text-left'>
            The Start of A journey.
          </Text>
        </View>
        <View>
          <FlatList 
            data={MEDITATION_DATA} 
            className='mb-20'
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable 
                onPress={() => router.push}
                className= "h-48 my-4 rounded-md overflow-hidden"
              >
                <ImageBackground
                    source={MEDITATION_IMAGES[item.id - 1]}
                    resizeMode="cover"
                    className="flex-1 rounded-lg justify-center"
                >
                  <LinearGradient 
                      colors={[
                        "transparent", 
                        "rgba(0, 0, 0, 0.8)",
                        ]}
                        className='flex-1 justify-end items-center'
                  >
                    <Text className="text-gray-100 text-3xl font-semibold text-center">
                      {item.title}
                    </Text>
                  </LinearGradient>
                  

                </ImageBackground>

              </Pressable>
            )}

          />
        </View>
      </AppGradient> 

      <StatusBar style='light' /> 
    </View>
  )
}

export default NatureMeditate