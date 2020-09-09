import React, { useState } from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'
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

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title='Taniuśko' />
        <ResultsList
          results={filterResultsByPrice('$$')}
          title='Sypnij groszem'
        />
        <ResultsList results={filterResultsByPrice('$$$')} title='Droży' />
        <ResultsList
          results={filterResultsByPrice('$$$$')}
          title='🎷 Fleciarsko'
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  counter: {
    paddingLeft: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: `#CCC`,
  },
})

export default SearchScreen
