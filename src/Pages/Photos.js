import React, { useState, useRef } from 'react'
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
  const [show, setShow] = useState(false)
  const selectedPhoto = useRef('1')
  console.log('render-photos')

  function openClose(item) {
    selectedPhoto.current = item
    setShow(!show)
  }

  return (
    <div>
      <div>
        <h1>Photoalbum № {selectedAlb}</h1>
        {show && (
          <Modal
            photosArr={photosArr}
            openClose={openClose}
            selectedPhoto={selectedPhoto.current}
          />
        )}
      </div>
      {photosArr.map((item) => {
        return item.albumId === selectedAlb ? (
          <div
            style={divPhoto}
            key={item.id}
            onClick={() => {
              openClose(item.id)
            }}
          >
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
