import React, { useEffect, useState, useRef } from 'react'
import '../Modal.css'

function Modal({ photosArr, openClose, selectedPhoto }) {
  const numberPhoto = useRef(selectedPhoto)
  const [foundUrl, setFoundUrl] = useState('')
  console.log('render-modal')

  useEffect(() => {
    photosArr.map((item) => {
      return item.id === numberPhoto.current ? setFoundUrl(item.url) : false
    })
  }, [photosArr])

  function findUrl(selected) {
    photosArr.map((item) => {
      return item.id === selected ? setFoundUrl(item.url) : false
    })
  }

  function increment() {
    switch (numberPhoto.current) {
      case 5000:
        break
      default:
        findUrl(++numberPhoto.current)
    }
  }

  function decrement() {
    switch (numberPhoto.current) {
      case 1:
        break
      default:
        findUrl(--numberPhoto.current)
    }
  }

  return (
    <React.Fragment>
      <div className="modal">
        <div className="modal-body">
          <img className="modal-img" src={foundUrl} alt="colorpic" />
          <p className="modal-text">number photo - {numberPhoto.current}</p>
          <div className="modal-buttons">
            <button onClick={decrement}>prev</button>
            <button
              onClick={() => {
                openClose()
              }}
            >
              close
            </button>
            <button onClick={increment}>next</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Modal
