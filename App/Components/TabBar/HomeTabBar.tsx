import React, { useState } from 'react'
import { View } from 'react-native'

// Components
import { CButton } from '@/Components/CustomButton'

// Themes
import styles from './Styles/HomeTabBarStyles'
import { Images } from '@/Theme'

const HomeTabBar = ({ state, navigation }: any) => {
  const [tabIndex, setTabIndex] = useState(state.index)

  const onPressTab = (screen: string, index: number) => () => {
    navigation.navigate(screen)
    setTabIndex(index)
  }
  return (
    <View style={styles.container}>
      <CButton
        activeOpacity={1}
        iconSource={Images.chat}
        onPress={onPressTab('MyMessageScreen', 0)}
        iconStyles={tabIndex === 0 ? styles.activeIcon : styles.inactiveIcon}
      />
      <CButton
        activeOpacity={1}
        onPress={onPressTab('ContactScreen', 1)}
        iconSource={Images.contact}
        iconStyles={tabIndex === 1 ? styles.activeIcon : styles.inactiveIcon}
      />
      <CButton
        activeOpacity={1}
        onPress={onPressTab('SettingScreen', 2)}
        iconSource={Images.menu}
        iconStyles={tabIndex === 2 ? styles.activeIcon : styles.inactiveIcon}
      />
    </View>
  )
}

export default HomeTabBar
