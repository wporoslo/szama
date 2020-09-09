import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from './src/screens/SearchScreen'
import RestaurantScreen from './src/screens/RestaurantScreen'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search'>
        <Stack.Screen
          name='Search'
          component={SearchScreen}
          options={{ title: 'Szama' }}
        />
        <Stack.Screen
          name='Result'
          component={RestaurantScreen}
          options={{ title: 'Szczegóły' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
