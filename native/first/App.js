import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlexSamples from './src/samples/FlexSamples'
import FlexSamples2 from './src/samples/FlexSamples2'
import UseStateSample from './src/samples/UseStateSample'
import Characters from './src/screens/Characters'

const App = () => {
  return (
    // <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    //   <Text style={styles.testStyle}>Hello React Native</Text>
    // </View>
    // <FlexSamples2/>
    // <UseStateSample/>
    <Characters />
  )
}

export default App

const styles = StyleSheet.create({
  testStyle : {
    fontSize: 50,
    color: 'red'
  }
})