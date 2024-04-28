import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from '@rneui/themed';

const CharacterCard = ({item}) => {
  return (
    <Card>
      <Card.Title>{item.name}</Card.Title>
      <Card.Divider />
      <Card.Image
        resizeMode="contain"
        style={{ height: 300 }}
        source={{
          uri: item.image,
        }}
      />
      <Text style={{ marginVertical: 10 }}>
        {item.status}
      </Text>
    </Card>
  )
}

export default CharacterCard

const styles = StyleSheet.create({})