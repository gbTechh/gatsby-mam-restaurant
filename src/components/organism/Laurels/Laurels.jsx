import React from "react"

import { useGetFavoriteDishes } from "../../../hooks/useGetFavoriteDishes"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import {useGetAwardsFavorite} from "../../../hooks/useGetAwardsFavorite"
import { SubHeading } from "../../molecules"

import { Container, Text } from "../../ui"
import "./laurels.css"

export const Laurels = ({children, ...props}) => { 
  const {
    favoriteDishes:{
      title,
      subtitle,
      mainImage,
      backgroundImageDesktop,
      backgroundImageMobil,
    },
  } = useGetFavoriteDishes()

  const favoriteDishes =  useGetAwardsFavorite()

return (
<Container>
<div className="app__bg app__wrapper section__padding" id="awards">
  <div className="app__wrapper_info">
      <SubHeading title={subtitle}  />
      <Text 
      size="h1" 
      ff="head" 
      color="primary2"
      align="left"
      className="headtext__cormorant">
      {title}
      </Text>

    <div className="app__laurels_awards">
      <div>
       {favoriteDishes.map(e => (
        <div className="app__laurels_awards-card" key={e.node.id}>
        <div className="image_favorites">
     <GatsbyImage
       image={getImage(e.node.favorites.image)}
      alt="image"
      ></GatsbyImage>
      </div>
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
         <p align="left" className="p__opensans">{e.node.name}</p>
      </p>
      
      <Text align="left" className="p__opensans">{e.node.description}</Text>
    </div>
     </div>

))}        
    </div>
        </div>
            </div>
            <div className="app__wrapper_img">
            <GatsbyImage
            image={getImage(mainImage)}
          alt="main_image"
            ></GatsbyImage>
            </div>
    </div>
          </Container>
);
}