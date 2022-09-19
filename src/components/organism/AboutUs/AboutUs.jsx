import React, { useEffect, useRef, useState } from "react"

import { getImage, GatsbyImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"

import { useGetDataAboutUs, useObserver } from "../../../hooks"
import { Container, Spacer, Text } from "../../ui"

import "./aboutus.css"
import { useImageMediaQuery } from "../../../hooks/useImageMediaQuery"

export const AboutUs = ({ children, ...props }) => {
  const {
    slug,
    featuredImage,
    aboutus: {
      imagen,
      aboutUs,
      ourHistory,
      backgroundImageMobil,
      backgroundImageDesktop,
    },
  } = useGetDataAboutUs()

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
        console.log("adssad")
        setIsVisible(true)
        observer.unobserve(entry.target)
      } else {
        setIsVisible(false)
      }
    })
  }, [entries, observer])

  const { image } = useImageMediaQuery({
    imageMobil: backgroundImageMobil,
    imageDesktop: backgroundImageDesktop,
  })

  console.log({ image })
  return (
    <Container fluid pd="0" className="about-us" as="section" id={slug}>
      <BackgroundImage
        Tag="div"
        className="about-us__bg-image"
        fluid={image.localFile.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
        <Container>
          <div className="about-us__row">
            <div
              className="about-us__col about-us__col--1 is-observer"
              style={{
                transform: isVisible && `translateY(-${offset * 0.0083}%)`,
              }}
            >
              <Text
                color="primary2"
                size="h1"
                as="h2"
                className="about-us__title-about"
                ff="head"
              >
                {aboutUs.title}
              </Text>
              <Spacer y="5" />
              <Text className="about-us__text-about" color="secondary2">
                {aboutUs.description}
              </Text>
              <Spacer y="10|t:10|d:0" />
              <Spacer y="10|t:10|d:0" />
            </div>
            <div
              className="about-us__col about-us__col--2"
              ref={imgIntersection}
            >
              <GatsbyImage
                style={{
                  marginTop: `150px`,
                  transform: isVisible && `translateY(-${offset * 0.02}%)`,
                }}
                image={getImage(imagen)}
                alt="icon-image"
                className="about-us__image is-observer"
              ></GatsbyImage>
            </div>
            <div
              className="about-us__col about-us__col--3 is-observer"
              style={{
                transform: isVisible && `translateY(-${offset * 0.009}%)`,
              }}
            >
              <Text
                color="primary2"
                size="h1"
                as="h2"
                className="about-us__title-history"
                ff="head"
              >
                {ourHistory.title}
              </Text>
              <Spacer y="5" />
              <Text className="about-us__text-history" color="secondary2">
                {ourHistory.description}
              </Text>
            </div>
          </div>
        </Container>
      </BackgroundImage>
    </Container>
  )
}
