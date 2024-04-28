import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseService } from '../services/baseService'
import CharacterCard from '../components/CharacterCard'

const Characters = () => {

  const [data, setData] = useState({})

  useEffect(() => {
    getCharacters()
  }, [])

  const getCharacters = async () => {
    try {
      let response = await baseService.get("https://rickandmortyapi.com/api/character")
      setData(response)
    } catch (error) {
      console.log("Get Characters Error", error)
    }
  }
  
  const getNextNewData = async() => {
    try {
      let response = await baseService.get(`${data.info.next}`)
      setData(response)
    } catch (error) {
      console.log("Get Characters Error", error)
    }
  }

  return (
    // <ScrollView>
    //   {data && data.map((item, index) => (
    //     <View key={index}>
    //       <Text style={styles.nameStyle}>{item.name}</Text>
    //       <Text style={styles.statusStyle}>{item.status}</Text>
    //     </View>
    //   ))}
    // </ScrollView>
    <>

      <FlatList data={data.results} renderItem={({ item }) => (
        <CharacterCard item={item}
        />
      )}
        ListFooterComponent={
          <View style={styles.buttonContainer}>
            <Button onPress={null} title='Prev' />
            <Button onPress={getNextNewData} title='Next' />
          </View>
        }
      />

    </>

  )
}

export default Characters

const styles = StyleSheet.create({
  nameStyle: {
    fontSize: 25
  },
  statusStyle: {
    fontSize: 15,
    color: "red"
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: "space-around",
    marginVertical: 40
  }
})
