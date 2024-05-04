import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlexSamples from './src/samples/FlexSamples'
import FlexSamples2 from './src/samples/FlexSamples2'
import UseStateSample from './src/samples/UseStateSample'
import Characters from './src/screens/Characters'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CharacterDetail from './src/screens/CharacterDetail'
import axios from 'axios'
import Episodes from './src/screens/Episodes'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Search from './src/screens/Search'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
  
  axios.defaults.baseURL = "https://rickandmortyapi.com/api"

  return (
    // <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    //   <Text style={styles.testStyle}>Hello React Native</Text>
    // </View>
    // <FlexSamples2/>
    // <UseStateSample/>
    
    // <Characters />
    <NavigationContainer>
      {/* <Tab.Navigator>
        <Tab.Screen name='Character' component={Characters} />
        <Tab.Screen name='CharacterDetail' component={CharacterDetail} />
        <Tab.Screen name='Search' component={Search} />
      </Tab.Navigator> */}
      <Stack.Navigator>
        <Stack.Screen name='Character' component={Characters} options={{
          headerShown: false
        }} />
        <Stack.Screen name="CharacterDetail" component={CharacterDetail} />
        <Stack.Screen name="Episodes" component={Episodes} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  testStyle : {
    fontSize: 50,
    color: 'red'
  }
})