import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
  const [albums, setAlbums] = React.useState([])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos`).then((res) => {
      setAlbums(
        res.data.reduce((result, item) => {
          return result.includes(item.albumId)
            ? result
            : [...result, item.albumId]
        }, [])
      )
    })
  })

  return (
    <div>
      <ul>
        {albums.map((item) => {
          return <li>{item}</li>
        })}
      </ul>
    </div>
  )
}
