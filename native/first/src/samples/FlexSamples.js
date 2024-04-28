import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

const FlexSamples = () => {

  console.log(width)
  console.log(height)
  return (
    <View style={styles.containter}>
      <View style={styles.firstCcontainter}>
        <Text>FlexSamples</Text>
      </View>
      <View style={styles.secondContainter}>
        <Text>FlexSamples</Text>
      </View>
      <View style={styles.thirdContainter}>
        <Text>FlexSamples</Text>
      </View>
    </View>
  )
}

export default FlexSamples

const styles = StyleSheet.create({
  containter:{
    height: height,
    backgroundColor: 'blue'
  },
  firstCcontainter:{
    height: height / 5,
    backgroundColor: 'indianred'
  },
  secondContainter:{
    height: 3 * height / 5,
    backgroundColor: 'navy'
  },
  thirdContainter:{
    height: height / 5,
    backgroundColor: "purple"
  },
})