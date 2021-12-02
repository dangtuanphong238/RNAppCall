import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

// Redux
import { useSelector } from 'react-redux'

// Themes
import styles from './Styles/InComingCallScreenStyles'

// Types
import { RootState } from '@/Types'
const InComingScreen = () => {
  const state = useSelector((state: RootState) => state.App)

  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  )
}

export default InComingScreen
