import React from "react"

import { useGetFavoriteDishes } from "../../../hooks/useGetFavoriteDishes"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { useGetAwardsFavorite } from "../../../hooks/useGetAwardsFavorite"
import { SubHeading } from "../../molecules"

import { Container, Spacer, Text } from "../../ui"
import "./laurels.css"

export const Laurels = ({ children, ...props }) => {
  const {
    slug,
    favoriteDishes: {
      title,
      subtitle,
      mainImage,
      backgroundImageDesktop,
      backgroundImageMobil,
    },
  } = useGetFavoriteDishes()

  const favoriteDishes = useGetAwardsFavorite()

  return (
    <Container className="laurels" id={slug}>
      <div className="laurels__row " id="awards">
        <div className="app__wrapper_info">
          <SubHeading title={subtitle} />
          <Text
            size="h2"
            ff="head"
            color="primary2"
            align="left"
            className="headtext__cormorant"
          >
            {title}
          </Text>
          <Spacer y="10" />
          <div className="app__laurels_awards">
            {favoriteDishes.map((e) => (
              <React.Fragment key={e.node.name}>
                <div className="app__laurels_awards-card" key={e.node.id}>
                  <GatsbyImage
                    image={getImage(e.node.favorites.image)}
                    alt="image"
                    style={{ alignSelf: "center" }}
                  ></GatsbyImage>
                  <Spacer x="5" />
                  <div className="laurels__text">
                    <Text color="primary2" fw="title" align="left">
                      {e.node.name}
                    </Text>
                    <Text align="left">{e.node.description}</Text>
                  </div>
                </div>
                <Spacer y="7" />
              </React.Fragment>
            ))}
          </div>
        </div>
        <Spacer y="10|t:0" />
        <Spacer y="10|t:0" />
        <Spacer x="0|t:10" />
        <div className="app__wrapper_img">
          <GatsbyImage
            image={getImage(mainImage)}
            alt="main_image"
            style={{
              borderRadius: "0px 50px 0px 50px",
            }}
          ></GatsbyImage>
        </div>
      </div>
    </Container>
  )
}
