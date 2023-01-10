import React from "react"
import { View, Image, Text, StyleSheet } from "react-native"

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: result.image_url}}
        style={styles.imageStyle}
      />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.name}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 170,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: "bold",
  },
})

export default ResultsDetail
