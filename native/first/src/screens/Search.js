import { Alert, Button, FlatList, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'
import { baseService } from '../services/baseService'
import { ListItem } from '@rneui/base'
import { Avatar } from '@rneui/themed'

const Search = () => {
  const [text, setText] = useState("")
  const [data, setData] = useState([])

  const goSearch = async () => {
    try {
      if (text === "") {
        //return Alert.alert('Error','Please type something')
        return ToastAndroid.show('Please type something', ToastAndroid.SHORT)
      }
      let response = await baseService.get("/character/?name=" + text)
      setData(response.results)
    } catch (error) {
      return ToastAndroid.show('Please try Again', ToastAndroid.SHORT)
    }
  }

  return (
    <View>
      <TextInput style={styles.input} value={text} onChangeText={setText}
      showSoftInputOnFocus={false}
      />
      <Button title='Search' onPress={goSearch} color={"indianred"} />
      <FlatList data={data} renderItem={({ item }) => (
        <ListItem bottomDivider>
          <Avatar
            rounded
            source={{ uri: item.image }}
          />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.status}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      )} />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10
  }
})