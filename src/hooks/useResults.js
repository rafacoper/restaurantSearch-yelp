import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default useResults = () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState("")

  console.log('RESULTS AT FIRST :::', results)

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization:
  //       "Bearer qqLPfij8mGEKf1F7gmNB2YgyDAj2B_MQXTrQ7rkB6OYUTo6F7dwLfq31L_8pFftr4oSfhnWO2gzMM7ZvRdfuXECtWY21rW-ztlPwF1uTuoH2YfpJ3MmIeMZsfFW8Y3Yx",
  //   }
  // };

  // const searchApi = fetch('https://api.yelp.com/v3/businesses/search?limit=20&location=San_Francisco', options)
  //   .then(response => response.json())
  //   .then(response => console.log('JUST RESPONSE :::', response))
  //   .then(response => console.log('RESPONSE DOT :::', response.businesses))
  //   .then(setResults(response))
  //   .catch(err => console.error(err), setErrMessage('Caiu no catch'));

  //  console.log('RESULTS DEPOIS :::', results)
 
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'San Francisco'
        },
      })
      setResults(response.data.businesses)
      console.log('RESULTS ON SEARCH', results)
    } catch (err) {
      setErrorMessage("Something Went Wrong")
    }
  }

  useEffect(() => {
    searchApi('pasta')
    return () => {
      console.log('Use effect used');
    }
  }, [])
  
  return [searchApi, results, errorMessage]
}