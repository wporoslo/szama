import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm,
          limit: 50,
          location: `kraków`,
        },
      })
      setResults(response.data.businesses)
    } catch (err) {
      setErrorMessage('Something went wrong. Try again later.')
    }
  }

  useEffect(() => {
    searchApi(`ramen`)
  }, [])

  return [searchApi, results, errorMessage]
}
