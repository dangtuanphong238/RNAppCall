import React, { useRef } from 'react'
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native'

// Styles
import styles from './Styles/MessageCardStyles'

// Types
import { Message } from '@/Types/ConversationType'
import { SafeAreaView } from 'react-native-safe-area-context'

interface MessageCardProps {
  onPress?: () => void
  onLongPress?: () => void
  onPressIn?: () => void
  onPressOut?: () => void
  item: Message
  index: number
}
const MessageCard = ({
  onPress,
  onLongPress = () => {},
  onPressIn = () => {},
  onPressOut = () => {},
  item,
  index
}: MessageCardProps) => {
  const scaleMessageCard = useRef(new Animated.Value(1)).current

  const changeScale = (
    fromScale: any,
    toScale: number,
    type: 'timing' | 'spring',
    valueByType?: number | undefined | null,
    callback?: void | undefined | null
  ) => {
    type === 'spring'
      ? Animated.spring(fromScale, {
          toValue: toScale,
          friction: valueByType ?? 10,
          useNativeDriver: true
        }).start(() => {
          callback && callback
        })
      : Animated.timing(fromScale, {
          toValue: toScale,
          duration: valueByType ?? 100,
          useNativeDriver: true
        }).start(() => {
          callback && callback
        })
  }

  const onPressInCard = () => {
    changeScale(scaleMessageCard, 1.02, 'spring', 8, onPressIn())
  }

  const onPressOutCard = () => {
    changeScale(scaleMessageCard, 1, 'spring', 8, onPressOut())
  }

  return (
    <Animated.View
      key={item.id + index}
      style={{ transform: [{ scale: scaleMessageCard }] }}
    >
      <TouchableOpacity
        onPress={onPress}
        onPressIn={onPressInCard}
        onPressOut={onPressOutCard}
        onLongPress={onLongPress}
        activeOpacity={0.95}
        style={styles.container}
      >
        <View style={styles.messageCardImageWrapper}>
          <Image
            source={{ uri: item.avatar }}
            style={styles.messageCardImage}
          />
        </View>
        <View style={styles.messageCardRightWrapper}>
          <Text style={styles.messageCardUserName}>{item.full_name}</Text>
          <Text numberOfLines={1} style={styles.messageCardLastMessage}>
            {item.last_message}
          </Text>
        </View>
        <Text style={styles.messageCardLastConversation}>
          {item.last_conversation}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

export default MessageCard
