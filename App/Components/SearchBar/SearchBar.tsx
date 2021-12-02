import React, { FC, useRef, Ref } from 'react'
import { View, Text, TextInput, Image, ViewStyle } from 'react-native'

// Components
import { CButton } from '@/Components'

// Themes
import styles from './Styles/SearchBarStyles'
import { Images } from '@/Theme'

export interface SearchBarProps {
  value?: string
  onPressSearch?: () => void
  placeholder?: string
  searchBarStyle?: ViewStyle
  ref?: Ref<TextInput>
}

const SearchBar: FC<SearchBarProps> = (props: SearchBarProps) => {
  const { value, onPressSearch, placeholder, ref, searchBarStyle } = props
  return (
    <View style={[styles.container, searchBarStyle]}>
      <TextInput
        ref={ref}
        placeholder={placeholder}
        style={[styles.textInputWrapper]}
      />

      <CButton
        onPress={() => {}}
        iconSource={Images.search}
        iconStyles={styles.searchBarIcon}
      />
    </View>
  )
}

export default SearchBar
