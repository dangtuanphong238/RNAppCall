import React, { FC, useRef } from 'react'
import { ReactElement } from 'react'
import {
  Image,
  Text,
  TouchableOpacity,
  Animated,
  ViewStyle,
  ImageSourcePropType,
  ImageStyle
} from 'react-native'

// Themes
import styles from './Styles/CButonStyles'

interface CButtonProps {
  animationType?: 'fade' | 'zoomIn' | 'zoomOut'
  onPress: () => void
  onPressIn?: () => void
  onPressOut?: () => void
  title?: string
  titleStyles?: ViewStyle | null
  buttonStyles?: ViewStyle | null
  iconSource?: ImageSourcePropType | undefined
  iconStyles?: ImageStyle | null
  iconPisition?: 'top' | 'bottom' | 'left' | 'right'
  activeOpacity?: number
  children?: ReactElement
  dissable?: boolean
  shadow?: boolean
}
const CButton: FC<CButtonProps> = (props: CButtonProps) => {
  const {
    animationType,
    onPress,
    onPressIn = () => {},
    onPressOut = () => {},
    title,
    titleStyles,
    buttonStyles,
    iconSource,
    iconStyles,
    activeOpacity = 0.5,
    children,
    dissable = false,
    shadow
  } = props

  const buttonScale = useRef(new Animated.Value(1)).current

  const changeScale = (scale: number, callback?: void) => {
    Animated.spring(buttonScale, {
      toValue: scale,
      friction: 5,
      useNativeDriver: true
    }).start(() => {
      callback && callback
    })
  }

  const onPressInButton = () => changeScale(0.9, onPressIn())

  const onPressOutButton = () => changeScale(1, onPressOut())

  return (
    <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
      <TouchableOpacity
        onPressIn={onPressInButton}
        onPressOut={onPressOutButton}
        onPress={onPress}
        style={[buttonStyles, styles.container, shadow && styles.shadowButton]}
        disabled={dissable}
        activeOpacity={activeOpacity}
      >
        {iconSource && (
          <Image source={iconSource ?? {}} style={[styles.icon, iconStyles]} />
        )}
        {title ? (
          <Text style={[titleStyles, styles.titleStyles]}>{title}</Text>
        ) : null}
      </TouchableOpacity>
    </Animated.View>
  )
}

CButton.defaultProps = {
  animationType: 'zoomIn',
  activeOpacity: 0.9,
  dissable: false,
  title: '',
  shadow: false,
  iconPisition: 'top'
}

export default CButton
