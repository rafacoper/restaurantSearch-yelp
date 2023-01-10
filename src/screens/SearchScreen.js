import React, { useState } from "react"
import { Text, StyleSheet, ScrollView } from "react-native"
import SearchBar from "../components/SearchBar"
import ResultList from "../components/ResultsList"
import useResults from "../hooks/useResults"

const SearchScreen = () => {
  const [term, setTerm] = useState("")
  const [searchApi, results, errorMessage] = useResults()

  const filterByPrice = (price) => {
    return results.filter((res) => {
      return res.price === price
    })
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList
          results={filterByPrice("$")}
          title={"Bit Pricier"}
        />
        <ResultList
          results={filterByPrice("$$")}
          title={"Cost Effective"}
        />
        <ResultList
          results={filterByPrice("$$$")}
          title={"Big Spencer"}
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "grey",
  },
})

export default SearchScreen
