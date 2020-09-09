import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()

  return (
    <View style={styles.search}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {results ? <Text>We have found {results.length} results.</Text> : null}
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  search: {
    marginTop: 15,
  },
})

export default SearchScreen
