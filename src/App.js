import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import Header from './Components/Header'

function App() {
  const [photosArr, setPhotosArr] = useState([])
  const [albumsArr, setAlbumsArr] = useState([])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos`).then((res) => {
      setPhotosArr(res.data)
      setAlbumsArr(
        res.data.reduce((result, item) => {
          return result.includes(item.albumId)
            ? result
            : [...result, item.albumId]
        }, [])
      )
    })
  }, [])

  return (
    <div>
      <Header photosArr={photosArr} albumsArr={albumsArr} />
    </div>
  )
}

export default App
