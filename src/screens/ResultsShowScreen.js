import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, FlatList, Image } from "react-native"
import yelp from "../api/yelp"

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  const [data, setData] = useState(null)
  
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setData(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [id])
  
  if (!data) return null;

  return (
    <View>
      <Text>{data.name}</Text>
      <FlatList 
        data={data.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
          return <Image style={styles.imageStyle} source={{ uri: item }}/>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 300,
    height: 200,
  },
})

export default ResultsShowScreen
