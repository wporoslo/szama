import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.card}>
      {result.image_url ? (
        <Image style={styles.image} source={{ uri: `${result.image_url}` }} />
      ) : (
        <View style={{ ...styles.image, backgroundColor: `#CCC` }} />
      )}
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.details}>
        {result.rating} ★ Gwiazdek, {result.review_count}{' '}
        {result.review_count === 0
          ? `Rezencja`
          : result.review_count < 5
          ? `Recenzje`
          : `Recenzji`}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
  },
  name: {
    marginTop: 5,
    fontWeight: `bold`,
  },
  details: {
    color: `#CCC`,
    fontSize: 12,
  },
})

export default ResultsDetail
