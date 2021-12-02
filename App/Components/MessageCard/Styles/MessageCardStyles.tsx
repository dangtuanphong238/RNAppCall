import { Dimensions, StyleSheet } from 'react-native'

// Themes
import { Colors, Normalize } from '@/Theme'
export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: Normalize(4),
    alignItems: 'center',
    paddingHorizontal: Normalize(16)
  },
  messageCardRightWrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingEnd: Normalize(4)
  },
  messageCardImageWrapper: {
    marginEnd: Normalize(12),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  messageCardImage: {
    width: Normalize(60),
    height: Normalize(60),
    borderRadius: Normalize(30),
    backgroundColor: '#E1306C'
  },
  messageCardUserName: {
    fontWeight: '500',
    fontSize: Normalize(18)
  },
  messageCardLastMessage: {
    fontWeight: '300',
    fontSize: Normalize(14)
  },
  messageCardLastConversation: {
    fontWeight: '300',
    fontSize: Normalize(12)
  }
})
