import React from 'react'

const divPhoto = {
  float: 'left',
  border: '1px solid black',
  borderRadius: '4px',
  margin: '1rem',
  overflow: 'hidden',
}

function Photos({ selectedAlb, photosArr }) {
  return (
    <div>
      {photosArr.map((item) => {
        return item.albumId === selectedAlb ? (
          <div style={divPhoto}>
            <img src={item.thumbnailUrl} />
          </div>
        ) : (
          false
        )
      })}
    </div>
  )
}

export default Photos
