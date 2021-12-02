import { StyleSheet } from 'react-native'
import { isIphoneX, getBottomSpace } from 'react-native-iphone-x-helper'

// themes
import { Normalize, Colors } from '@/Theme'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: isIphoneX() ? getBottomSpace() : Normalize(12),
    backgroundColor: Colors.white,
    alignItems: 'center',
    padding: Normalize(10),
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1
    },
    elevation: 3,
    shadowOpacity: 0.22,
    shadowRadius: 2.22
  },
  inactiveIcon: {
    tintColor: 'gray'
  },
  activeIcon: {
    tintColor: 'tomato'
  }
})
