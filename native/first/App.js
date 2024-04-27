import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text style={styles.testStyle}>Hello React Native</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  testStyle : {
    fontSize: 50,
    color: 'red'
  }
})