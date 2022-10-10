import React, { useEffect, useRef, useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// import { meal } from '../../constants';
import "./Intro.css"
import { useImageHeroParallax } from "../../../hooks/useImageHeroParallax"
import { useImageMediaQuery } from "../../../hooks/useImageMediaQuery"
import { useObserver } from "../../../hooks"
import BackgroundImage from "gatsby-background-image"
import { useGetIntroImages } from "../../../hooks/useGetIntroImages"

export const Intro = () => {
  const { imageParallaxMobil, imageParallaxDesktop } = useGetIntroImages()

  const { image } = useImageMediaQuery({
    imageMobil: imageParallaxMobil,
    imageDesktop: imageParallaxDesktop,
  })

  const [offset, setOffset] = useState()
  const [isVisible, setIsVisible] = useState(false)

  const imgIntersection = useRef()

  const handleScroll = () => setOffset(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const [observer, setElements, entries] = useObserver({
    root: null,
    margin: "0px",
    threshold: 0,
  })

  useEffect(() => {
    const image = document.querySelectorAll(".is-observer")
    setElements(image)
  }, [setElements])

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      } else {
        setIsVisible(false)
      }
    })
  }, [entries, observer])

  return (
    <div className="intro is-observer ">
      {image && (
        <BackgroundImage
          ref={imgIntersection}
          Tag="div"
          className=""
          fluid={image.localFile.childImageSharp.fluid}
          style={{
            backgroundPosition: `0 -${isVisible && offset * 0.03}px`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="intro-height"></div>
        </BackgroundImage>
      )}
    </div>
  )
}
