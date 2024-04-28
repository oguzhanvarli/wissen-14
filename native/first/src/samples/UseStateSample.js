import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const UseStateSample = () => {
  const [counter, setCounter] = useState(0)
  const [userNumber, setUserNumber] = useState(0)


  const incremenet = () => {
    //setCounter(counter + 1)
    setCounter(counter + Number(userNumber))
  }
  const decrement = () => {
    //setCounter(counter - 1)
    setCounter(counter - Number(userNumber))
  }

  //console.log(typeof(userNumber))


  return (
    <View>
      <Text style={styles.textStyle}>{counter}</Text>
      <TextInput style={styles.inputStyle} onChangeText={setUserNumber} value={userNumber} />
      <View style={styles.innerContainer}>
        <Button title="Azalt" onPress={decrement} color={'indianred'} />
        <Button title="Arttır" onPress={incremenet} />
      </View>
    </View>
  )
}

export default UseStateSample

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: 'red',
    textAlign: 'center',
  },
  innerContainer:{
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  inputStyle:{
    height: 40,
    borderWidth: 1,
    margin: 20
  }
})