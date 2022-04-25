import React, { useEffect, useState } from 'react'
import '../Modal.css'

function Modal({ photosArr, openClose, selectedPhoto }) {
  const [numberPhoto, setNumberPhoto] = useState(selectedPhoto)
  const [foundUrl, setFoundUrl] = useState('')

  useEffect(() => {
    findUrl(numberPhoto)
    console.log('rendered')
  }, [])

  function findUrl(selected) {
    photosArr.map((item) => {
      return item.id === selected ? setFoundUrl(item.url) : false
    })
  }

  function changePhoto(item) {
    setNumberPhoto(numberPhoto + item)
    findUrl(numberPhoto)
  }

  return (
    <React.Fragment>
      <div className="modal">
        <div className="modal-body">
          <img className="modal-img" src={foundUrl} alt="colorpic" />
          <p className="modal-text">
            number photo - {numberPhoto} , url - {foundUrl}
          </p>
          <div className="modal-buttons">
            <button
              onClick={() => {
                changePhoto(-1)
              }}
            >
              prev
            </button>
            <button
              onClick={() => {
                openClose()
              }}
            >
              close
            </button>
            <button
              onClick={() => {
                changePhoto(+1)
              }}
            >
              next
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Modal
