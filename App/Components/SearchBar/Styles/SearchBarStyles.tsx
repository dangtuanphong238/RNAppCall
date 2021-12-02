import { StyleSheet } from 'react-native'

// Themes
import { Colors, Normalize } from '@/Theme'

export default StyleSheet.create({
  container: {
    // width: '90%',
    backgroundColor: Colors.white,
    borderRadius: Normalize(5),
    flexDirection: 'row',
    padding: Normalize(4),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderWidth: 0.2,
    borderColor: 'gray'

    // elevation: 5
  },
  textInputWrapper: {
    flex: 1,
    paddingStart: Normalize(12)
  },
  searchBarIcon: {
    width: Normalize(18),
    height: Normalize(18)
  }
})
