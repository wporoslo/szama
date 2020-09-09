import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name='search' style={styles.icon} />
      <TextInput
        style={styles.textInput}
        placeholder={`Szukaj restauracji`}
        value={term}
        onChangeText={onTermChange}
        autoCapitalize='none'
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: `#F0EEEE`,
    height: 50,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 10,
    marginHorizontal: 15,
    flexDirection: `row`,

  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 18,
  },
  icon: {
    fontSize: 35,
    alignSelf: `center`,
    marginLeft: 10,
  },
})

export default SearchBar
