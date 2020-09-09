import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import useResults from '../hooks/useResults'
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()

  const filterResultsByPrice = price => {
    // price === '$' || '$$' || '$$$' || '$$$$'
    return results.filter(result => result.price === price)
  }

  console.log(results)

  return (
    <View style={styles.search}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>We have found {results.length} results.</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ResultsList results={filterResultsByPrice('$')} title='Taniuśko' />
      <ResultsList results={filterResultsByPrice('$$')} title='Sypnij groszem' />
      <ResultsList results={filterResultsByPrice('$$$')} title='Droży' />
      <ResultsList results={filterResultsByPrice('$$$$')} title='🎷 Fleciarsko' />
    </View>
  )
}

const styles = StyleSheet.create({
  search: {
    marginTop: 15,
  },
})

export default SearchScreen
