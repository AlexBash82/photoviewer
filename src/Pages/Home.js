import React from 'react'
import { Link } from 'react-router-dom'

const divAlbum = {
  width: '4rem',
  float: 'left',
  border: '2px solid black',
  borderRadius: '4px',
  margin: '2rem',
}

function Home({ albumsArr, selectAlb }) {
  return (
    <div>
      <div>
        <h1>Different albums</h1>
      </div>
      <div>
        {albumsArr.map((item) => {
          return (
            <Link to="/photos">
              <div style={divAlbum} key={item} onClick={() => selectAlb(item)}>
                <h1>{item}</h1>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Home
