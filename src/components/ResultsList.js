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

  if (!results.length) {
    return null
  }

  return (
    <View style={styles.list}>
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
                    params: { id: item.id },
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
