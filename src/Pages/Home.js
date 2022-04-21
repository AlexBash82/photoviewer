import React from 'react'

const divAlbum = {
  width: '5%',
  float: 'left',
  border: '1px solid #ccc',
  borderRadius: '4px',
  margin: '2rem',
}

function Home({ selectAlbum, albumsArr }) {
  return (
    <div>
      {albumsArr.map((item) => {
        return (
          <div style={divAlbum} onClick={() => selectAlbum(item)}>
            <h1>{item}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default Home
