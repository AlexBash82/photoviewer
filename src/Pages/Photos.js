import React from 'react'

const divPhoto = {
  float: 'left',
  border: '2px solid black',
  borderRadius: '10px',
  margin: '1rem',
  overflow: 'hidden',
}

function Photos({ photosArr, selectedAlb }) {
  return (
    <div>
      {photosArr.map((item) => {
        return item.albumId === selectedAlb ? (
          <div style={divPhoto} key={item.id}>
            <img src={item.thumbnailUrl} alt="colorpic" />
          </div>
        ) : (
          false
        )
      })}
    </div>
  )
}

export default Photos
