import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export default function Screen3() {
  const route = useRoute();  
  return (
    <View>
      <Text>Screen3</Text>
    </View>
  )
}

const styles = StyleSheet.create({})