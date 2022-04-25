import React from 'react'
import Modal from '../Components/Modal'

const divPhoto = {
  float: 'left',
  border: '2px solid black',
  borderRadius: '10px',
  margin: '1rem',
  overflow: 'hidden',
  position: 'relative',
}

const divText = {
  position: 'absolute',
  bottom: '-10px',
  left: '5px',
}

function Photos({ photosArr, selectedAlb }) {
  return (
    <div>
      <div>
        <h1>Photoalbum № {selectedAlb}</h1>
        <Modal />
      </div>
      {photosArr.map((item) => {
        return item.albumId === selectedAlb ? (
          <div style={divPhoto} key={item.id}>
            <img src={item.thumbnailUrl} alt="colorpic" />
            <p style={divText}>{item.title}</p>
          </div>
        ) : (
          false
        )
      })}
    </div>
  )
}

export default Photos
