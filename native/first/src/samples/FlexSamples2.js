import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const FlexSamples2 = () => {

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

export default FlexSamples2

const styles = StyleSheet.create({
  containter:{
    flex: 1,
    backgroundColor: 'blue',
    //flexDirection: 'row'
  },
  firstCcontainter:{
    flex: 2,
    backgroundColor: 'indianred'
  },
  secondContainter:{
    flex: 3,
    backgroundColor: 'navy'
  },
  thirdContainter:{
    flex: 1,
    backgroundColor: "purple"
  },
})