import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import yelp from '../api/yelp'

const RestaurantScreen = ({ route }) => {
  const [result, setResult] = useState(null)
  const id = route.params.id

  const getResult = async id => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }

  return (
    <View>
      <Text style={styles.name}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
  },
})

export default RestaurantScreen
