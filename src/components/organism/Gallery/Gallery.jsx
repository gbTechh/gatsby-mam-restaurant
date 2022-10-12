import React from "react"

import { useGetDataGallery } from "../../../hooks/useGetDataGallery"

import { SliderGallery, SubHeading } from "../../molecules"
import { Button, Container, Spacer, Text } from "../../ui"
import "./gallery.css"

export const Gallery = () => {
  const {
    slug,
    id,
    gallery: {
      titlesGallery: { mainTitle, subtitle },
      linkInstagram,
      description,
      gallery: arrayGallery,
    },
  } = useGetDataGallery()

  return (
    <Container className="gallery" id={slug}>
      <div className="app__gallery-content">
        <SubHeading title={subtitle} />
        <Text align="left" size="h2" ff="head" color="primary2">
          {mainTitle}
        </Text>
        <Spacer y="10" />
        <Text align="left">{description}</Text>
        <Spacer y="10" />
        <Button as="a" href={linkInstagram}>
          View More
        </Button>
      </div>
      <Spacer y="10|t:10|d:0" />
      <Spacer y="10|t:10|d:0" />
      <Spacer x="0|t:0|d:10" />
      <Spacer x="0|t:0|d:10" />

      <div className="app__gallery-images">
        <SliderGallery images={arrayGallery} />
      </div>
    </Container>
  )
}
