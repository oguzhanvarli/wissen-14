import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { baseService } from '../services/baseService'
import { Card } from '@rneui/themed';


const CharacterDetail = ({ route, navigation }) => {
  let { itemId } = route.params
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({
    id: 0,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: {
      name: "",
      url: ""
    },
    location: {
      name: "",
      url: ""
    },
    image: "",
    episode: [
    ],
    url: "",
    created: ""

  })

  useEffect(() => {
    getCharacterDetail()
  }, [])

  const getCharacterDetail = async () => {
    let response = await baseService.get(`/character/${itemId}`)
    setData(response)
    setLoading(false)
  }

  return (
    <View>
      {loading ?
        <View style={styles.activityContainer}>
          <ActivityIndicator size={'large'} color="#aaa" />
        </View>
        :
        <Card>
          <Card.Title>{data.name}</Card.Title>
          <Card.Divider />
          <Card.Image
            resizeMode="contain"
            style={{ height: 300 }}
            source={{
              uri: data.image,
            }}
          />
          <Text style={{ marginVertical: 10 }}>
            {data.status}
          </Text>
          <Card.Divider />
            <FlatList horizontal data={data.episode} renderItem={({item}) => (
              <View style={styles.episodeContainer} >
                <Text onPress={() => navigation.navigate('Episodes')} style={styles.episodeText}>{item.split('episode/')[1]}</Text>
              </View>
            )} />
        </Card>}
    </View>
  )
}

export default CharacterDetail

const styles = StyleSheet.create({
  activityContainer:{
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  episodeContainer:{
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'gray',
    justifyContent:'center',
    alignItems: 'center',
    marginRight: 15
  },
  episodeText: {
    color: 'white',
    fontSize: 25,
  }
})