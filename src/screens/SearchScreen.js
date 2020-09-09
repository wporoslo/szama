import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
  return (
    <View style={styles.search}>
      <SearchBar />
    </View>
  )
}

const styles = StyleSheet.create({
  search: {
    marginTop: 15,
  },
})

export default SearchScreen
