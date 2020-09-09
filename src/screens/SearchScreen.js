import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term,
          limit: 50,
          location: `kraków`,
        },
      })
      setResults(response.data.businesses)
    } catch (err) {
      setErrorMessage('Something went wrong. Try again later.')
    }
  }

  return (
    <View style={styles.search}>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
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
