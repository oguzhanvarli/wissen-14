import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Characters = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getCharacters()
  },[])

  const getCharacters = async() => {
    try {
      let response = await axios.get("https://rickandmortyapi.com/api/character")
      setData(response.data.results)
    } catch (error) {
      console.log("Get Characters Error", error)
    }
  }

  return (
    <View>
     {data.map((item) => (
      <Text>{item.name}</Text>
     ))}
    </View>
  )
}

export default Characters

const styles = StyleSheet.create({})