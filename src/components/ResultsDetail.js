import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: `${result.image_url}` }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.details}>
        {result.rating} Gwiazdek, {result.review_count} Rezencji
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    marginRight: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
  },
  name: {
    fontWeight: `bold`,
  },
  details: {
    color: `#CCC`,
    fontSize: 12,
  },
})

export default ResultsDetail
