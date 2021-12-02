import { StyleSheet } from 'react-native'

// Themes
import { Normalize, Colors } from '@/Theme'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: Normalize(4)
  },
  shadowButton: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  titleStyles: {},
  icon: {
    width: Normalize(30),
    height: Normalize(30)
  }
})
