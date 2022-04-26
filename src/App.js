import React, { useEffect, useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import Header from './Components/Header'

function App() {
  const photosArr = useRef([])
  const [albumsArr, setAlbumsArr] = useState([])

  console.log('render-app')

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos`).then((res) => {
      photosArr.current = res.data
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
      <Header photosArr={photosArr.current} albumsArr={albumsArr} />
    </div>
  )
}

export default App
