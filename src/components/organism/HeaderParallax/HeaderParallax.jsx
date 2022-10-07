import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { useGetDataHeader } from "../../../hooks"
import { useImageHeroParallax } from "../../../hooks/useImageHeroParallax"

import { Button, Col, Container, Row, Spacer, Text } from "../../ui"

import "./header.css"

export const HeaderParallax = ({ children, ...props }) => {
  const { titleTextHeader, subtitleTextHeader, shortDescriptionHeader } =
    useGetDataHeader()
  const { imageParallax, imageParallaxMobil } = useImageHeroParallax()

  const [offset, setOffset] = useState()
  const [imgParallax, setImgParallax] = useState()
  const handleScroll = () => setOffset(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const changeParallaxMQuery = (e) => {
    if (e.currentTarget.screen.width <= 760) {
      setImgParallax(imageParallaxMobil)
    } else {
      setImgParallax(imageParallax)
    }
  }

  useEffect(() => {
    setImgParallax(
      window.screen.width <= 760 ? imageParallaxMobil : imageParallax
    )
  }, [imageParallaxMobil, imageParallax])

  useEffect(() => {
    window.addEventListener("resize", changeParallaxMQuery)

    return () => {
      window.removeEventListener("resize", changeParallaxMQuery)
    }
  }, [])

  return (
    <Container fluid pd="0" className="header-parallax">
      <div className="header-parallax__opacity"></div>
      {imgParallax && (
        <GatsbyImage
          style={{
            transform: `translateY(-${offset * 0.03}%)`,
            maxWidth: "100%",
            width: "100%",
          }}
          imgStyle={{
            maxWidth: "100%",
            width: "100%",
          }}
          image={getImage(imgParallax)}
          alt="Mam restaurant"
          className="header-parallax__image"
        />
      )}
      <Container pd="0" className="header-parallax__text-container">
        <Row wrap="wrap" className="header-parallax__row">
          <Col col="12">
            <Spacer x="0" />
            <Text align="left" color="secondary1" fw="strong" ff="head">
              {/* {subtitleTextHeader} */}
            </Text>
          </Col>
          <Spacer y="4" />
          <Col col="12">
            <Text
              size="h1"
              align="left"
              color="secondary1"
              className="header-parallax__title"
              ff="head"
              fw="strong"
            >
              {titleTextHeader}
            </Text>
          </Col>
          <Spacer y="4" />
          <Col col="12">
            <Text align="left" color="secondary1" fw="bquote">
              {/* {shortDescriptionHeader} */}
            </Text>
          </Col>
        </Row>
        <Spacer y="8" />
        <Row className="header-parallax__row-btns">
          <Col>
            <Link to="/#about-us">
              <Button size="md" br="sm">
                Explore now
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/">
              <Button size="md" color="primary1" textColor="light" br="sm">
                View Menu
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
