import { ActivityIndicator, Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseService } from '../services/baseService'
import CharacterCard from '../components/CharacterCard'

const Characters = ({navigation}) => {

  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    getCharacters()
  }, [currentPage])

  const getCharacters = async () => {
    try {
      let response = await baseService.get(`/character?page=${currentPage}`)
      // console.log(response)
      setData([...data, ...response.results])
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

  const myReachEnd = () => {
    setCurrentPage(currentPage + 1)
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

      <FlatList data={data} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('CharacterDetail', {itemId : item.id})}>
          <CharacterCard item={item}/>
        </TouchableOpacity>
        
      )}
        ListFooterComponent={
          <View style={styles.buttonContainer}>
            <ActivityIndicator size={"large"} color={'#aaa'} />
          </View>
        }
        keyExtractor={(item,index) => index}
        onEndReached={myReachEnd}
        onEndReachedThreshold={5}
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
