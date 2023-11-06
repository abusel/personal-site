import './image-carousel.css'
import React, { useState } from 'react'

const ImageCarousel = props => {
    let imagesProxy = new Proxy(props.images, {
        get(target, property) {
          let index = parseInt(property)
          return isNaN(index)
            ? undefined
            : index < 0
            ? target[(target.length + (index % target.length)) % target.length]
            : target[index % Math.min(target.length, 5)]
        },
      })
      const [imageIndex, setImageIndex] = useState(0)
    
      function isDotActive(index, imageIndex) {
        return (
          (imageIndex < 0
            ? (props.images.length + (imageIndex % props.images.length)) %
              props.images.length
            : imageIndex % Math.min(props.images.length, 5)) === index
        )
      }
    
return <div className="container">
{props.images.length > 1 && (
  <button
  className="right-button icon-button"
    onClick={(e) => {
      e.preventDefault()
      setImageIndex(imageIndex + 1)
    }}>
    {">"}

  </button>
)}
{props.images.length > 1 && (
  <button
    className="left-button icon-button" 
    onClick={(e) => {
      e.preventDefault()
      setImageIndex(imageIndex - 1)
    }}>
   {"<"}
  </button>
)}
{props.images.length > 1 && (
  <div className="dots-container">
    {new Array(Math.min(props.images.length, 5)).fill(0).map((_, i) => {
        
      return isDotActive(i, imageIndex) ? <div key={i} className="active-dot" />: <div key={i} className="dot" />
    })}
  </div>
)}
<img
className="styled-image"
  src={imagesProxy[imageIndex]?.src}
  alt={imagesProxy[imageIndex]?.alt ?? "No Image"}
  style={imagesProxy[imageIndex]?.contain ? { objectFit: "contain" } : {}}
/>
</div>}

export default ImageCarousel