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
      <AppGradient colors={["#0e2439", "#287aa9", "#a3d5ff"]}>
        <View className='mb-6'>
          <Text className='text-gray-300 mb-3 font-bold text-4xl text-left'>
            Circuit Circus
          </Text>
          <Text className='text-gray-100 mb-3 font-meduim text-xl text-left'>
            Cultivating Curiosity, One Chip at a Time!
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