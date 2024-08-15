import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery'
import GuidedAffirmationsGallery from '@/components/GuidedAffirmationsGallery'

const Affirmations = () => {
  return (
    <View className='flex-1'>
        <AppGradient colors={["#004e92", "#0099e6", "#b3e0ff"]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text className='text-gray-300 text-3xl font-bold'>
                    More on This Page
                </Text>
                <View>
                    {AFFIRMATION_GALLERY.map((g) => (
                        <GuidedAffirmationsGallery 
                        key={g.title} 
                        title={g.title} 
                        previews={g.data} />
                    ))}
                </View>
            </ScrollView>
        </AppGradient>
      
    </View>
  )
}

export default Affirmations