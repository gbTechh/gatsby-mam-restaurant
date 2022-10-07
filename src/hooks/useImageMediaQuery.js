import React, { useState, useEffect } from 'react';

export const useImageMediaQuery = ({ imageMobil, imageDesktop }) => {

  const [image, setImage] = useState()

  const changeImage = (e) => {
    if (e.currentTarget.screen.width <= 760) {
      setImage(imageMobil)
    } else {
      setImage(imageDesktop)
    }
  }
  useEffect(() => {
    setImage(
      window.screen.width <= 760 ? imageMobil : imageDesktop
    )
  }, [imageMobil, imageDesktop])

  useEffect(() => {
    window.addEventListener("resize", changeImage)

    return () => {
      window.removeEventListener("resize", changeImage)
    }
  }, [changeImage])



  return { image }
}