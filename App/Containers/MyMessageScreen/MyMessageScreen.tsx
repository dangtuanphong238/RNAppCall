import React, { useEffect, useRef, useState } from 'react'
import {
  View,
  Text,
  Animated,
  Alert,
  Modal,
  ScrollView,
  TouchableOpacity
} from 'react-native'

// Redux
import { useSelector } from 'react-redux'

// Components
import { CButton, MessageCard, SearchBar } from '@/Components'

// Themes
import { Images, Normalize } from '@/Theme'
import styles from './Styles/MyMessageScreenStyles'

// Types
import { RootState } from '@/Types'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const ChatScreen = () => {
  const { Conversation } = useSelector((state: RootState) => state)

  const listOffsetY = useRef(new Animated.Value(0)).current

  const scalePreviewMessage = useRef(new Animated.Value(0)).current
  const scalePreviewOption = useRef(new Animated.Value(0)).current

  const [previewVisible, setPreviewVisible] = useState(false)

  const headerOpacity = listOffsetY.interpolate({
    inputRange: [0, Normalize(60)],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  })

  const headerShadowOpacity = listOffsetY.interpolate({
    inputRange: [0, Normalize(110)],
    outputRange: [0, 0.1],
    extrapolate: 'clamp'
  })

  const headerTranslate = listOffsetY.interpolate({
    inputRange: [0, Normalize(110)],
    outputRange: [0, -Normalize(70)],
    extrapolate: 'clamp'
  })
  console.log(listOffsetY)

  const topHeaderTranslate = listOffsetY.interpolate({
    inputRange: [0, Normalize(110)],
    outputRange: [0, Normalize(40)],
    extrapolate: 'clamp'
  })

  const renderHeader = () => {
    return (
      <Animated.View
        style={[
          styles.headerWrapper,
          {
            transform: [{ translateY: headerTranslate }],
            shadowOpacity: headerShadowOpacity
          }
        ]}
      >
        <Animated.View style={{ opacity: headerOpacity }}>
          <SearchBar
            searchBarStyle={styles.searchBarStyle}
            placeholder={'Search for conversations ...'}
          />
        </Animated.View>

        <Animated.View
          style={[
            styles.topHeaderWrapper,
            { transform: [{ translateY: topHeaderTranslate }] }
          ]}
        >
          <Text style={styles.screenTitle}>Chat</Text>
          <CButton
            onPress={() => {
              Alert.alert('huhu')
            }}
            iconSource={Images.writing}
            iconStyles={styles.newMessageIcon}
          />
        </Animated.View>
      </Animated.View>
    )
  }

  const onLongPressCard = () => {
    setPreviewVisible(true)
  }

  const onOpenPreview = () => {
    Animated.parallel([
      Animated.timing(scalePreviewMessage, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.spring(scalePreviewOption, {
        toValue: 1,
        delay: 200,
        friction: 60,
        useNativeDriver: true
      })
    ]).start()
  }
  const onClosePreview = () => {
    Animated.parallel([
      Animated.timing(scalePreviewMessage, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true
      }),
      Animated.timing(scalePreviewOption, {
        toValue: 0,
        delay: 100,
        duration: 200,
        useNativeDriver: true
      })
    ]).start(() => {
      setPreviewVisible(false)
    })
  }

  useEffect(() => {
    previewVisible && onOpenPreview()
  }, [previewVisible])

  const renderPreviewMessage = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.previewWrapperSrollView}
      >
        <TouchableOpacity activeOpacity={1} onPress={onClosePreview}>
          <Animated.View style={styles.fullScreen}>
            <View style={styles.previewMessageContentWrapper}>
              <TouchableWithoutFeedback>
                <Animated.View
                  style={[
                    styles.previewMessageContent,
                    { transform: [{ scale: scalePreviewMessage }] }
                  ]}
                >
                  <Text>Preview content will be put here :3</Text>
                </Animated.View>
              </TouchableWithoutFeedback>
            </View>

            <View style={styles.previewMessageOptionWrapper}>
              <TouchableWithoutFeedback>
                <Animated.View
                  style={[
                    styles.previewMessageOption,
                    { transform: [{ scale: scalePreviewOption }] }
                  ]}
                >
                  <Text>Preview option will be put here :3</Text>
                </Animated.View>
              </TouchableWithoutFeedback>
            </View>
          </Animated.View>
        </TouchableOpacity>
      </ScrollView>
    )
  }

  return (
    <View style={styles.container}>
      <Animated.FlatList
        style={styles.listMessageWrapper}
        contentContainerStyle={styles.listMessageContent}
        removeClippedSubviews
        extraData={Conversation.messages}
        renderItem={(props) => (
          <MessageCard {...props} onLongPress={onLongPressCard} />
        )}
        data={Conversation.messages}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: listOffsetY } } }],
          { useNativeDriver: true }
        )}
      />
      {renderHeader()}
      <Modal animationType='fade' visible={previewVisible} transparent>
        <TouchableWithoutFeedback>
          <View style={styles.previewWrapperModal}>
            {renderPreviewMessage()}
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  )
}

export default ChatScreen
