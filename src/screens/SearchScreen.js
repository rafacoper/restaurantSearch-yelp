import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import SearchBar from "../components/SearchBar"
import ResultList from "../components/ResultsList"
import useResults from "../hooks/useResults"

const SearchScreen = () => {
  const [term, setTerm] = useState("")
  const [searchApi, results, errorMessage] = useResults()

  console.log('O QUE VEM RESULTS ::: ', results)
  
  // const filterByPrice = () => {
  //   return results.filter(res => {
  //     return res.price === '$'
  //   })
  // }

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>We have found {results.length}</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <ResultList price={filterByPrice()} title={"Cost Effective"} /> */}
      <ResultList title={"Bit Pricier"} />
      <ResultList title={"Big Spencer"} />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "grey",
  },
})

export default SearchScreen
