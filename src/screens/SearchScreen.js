import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
  return (
    <View style={styles.search}>
      <SearchBar />
      <Text>Search</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: `red`,
  },
})

export default SearchScreen
