import React from 'react'
import { useNavigation, CommonActions } from '@react-navigation/native'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({ title, results }) => {
  const navigation = useNavigation()
  
  return (
    <View style={results < 1 ? styles.hide : styles.list}>
      <Text style={styles.title}>{title}</Text>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={result => result.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.dispatch(
                  CommonActions.navigate({
                    name: 'Result',
                  })
                )
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  hide: {
    display: `none`,
  },
  list: {
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: `bold`,
    marginLeft: 15,
    marginBottom: 5,
  },
})

export default ResultsList
