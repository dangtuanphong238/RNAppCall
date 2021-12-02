import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')
// Themes
import { Colors, Normalize } from '@/Theme'
import { isIphoneX } from 'react-native-iphone-x-helper'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: Normalize(40)
  },
  headerWrapper: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'flex-end',
    paddingHorizontal: Normalize(12),
    backgroundColor: Colors.white,
    position: 'absolute',
    margin: 0,
    top: Normalize(isIphoneX() ? 40 : 30),
    height: Normalize(100),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 2.62

    // elevation: 4
  },
  topHeaderWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Normalize(10),
    position: 'absolute',
    top: Normalize(isIphoneX() ? 10 : 0),
    left: Normalize(12)
  },
  listMessageWrapper: {
    flex: 1
  },
  listMessageContent: {
    paddingTop: Normalize(112)
  },
  screenTitle: {
    fontSize: Normalize(28),
    fontWeight: '700'
  },
  searchBarStyle: {
    height: Normalize(45),
    alignItems: 'center'
  },
  newMessageIcon: {
    width: Normalize(22),
    height: Normalize(22)
  },
  previewWrapperModal: {
    width,
    height,
    backgroundColor: 'rgba(0,0,0,0.8)'
  },
  fullScreen: {
    width,
    height
  },
  previewWrapperSrollView: {
    alignItems: 'center',
    marginTop: Normalize(40)
  },
  previewMessageContentWrapper: {
    width,
    paddingStart: Normalize(22),
    justifyContent: 'center'
  },
  previewMessageContent: {
    width: width - width / 5,
    marginVertical: Normalize(24),
    height: height - height / 2,
    backgroundColor: '#fff',
    borderRadius: Normalize(12),
    alignItems: 'center',
    justifyContent: 'center'
  },
  previewMessageOptionWrapper: {
    alignItems: 'flex-start',
    paddingStart: Normalize(22),
    justifyContent: 'center'
  },
  previewMessageOption: {
    width: width - width / 2,
    height: Normalize(200),
    backgroundColor: '#fff',
    borderRadius: Normalize(12),
    alignItems: 'center',
    justifyContent: 'center'
  }
})
