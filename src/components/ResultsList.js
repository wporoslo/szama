import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({ title, results }) => {
  return (
    <View style={results > 1 ? styles.list : null}>
      <Text style={styles.title}>{title}</Text>
      <View>
        <FlatList
          horizontal
          data={results}
          keyExtractor={result => result.id}
          renderItem={({ item }) => <ResultsDetail result={item} />}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    display: `none`,
  },
  title: {
    fontSize: 18,
    fontWeight: `bold`,
  },
})

export default ResultsList
