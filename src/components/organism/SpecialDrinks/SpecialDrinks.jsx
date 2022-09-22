import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { SubHeading } from "../../molecules"
// import { data, images } from '../../constants';
import "./specialDrinks.css"
import { useImageMediaQuery } from "../../../hooks/useImageMediaQuery"
import { Button, Col, Container, Row, Spacer, Text } from "../../ui"
import { useGetColdDrinks } from "../../../hooks/useGetColdDrinks"
import { useGetHotDrinks} from "../../../hooks/useGetHotDrinks"
// import { useGetImageDrink } from "../../../hooks/useGetColdDrinks"
export const SpecialDrinks = ({children, ...props}) => {
 

const data  = useGetHotDrinks()
console.log(data);


 return(
  <Container fluid pd="0" className="about-us" as="section">
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading"></p>
        {/* {description} */}
        <Text align="left"></Text>
        <Text align="left"></Text>
        {/* <Text align="left"> {hotDrinks.price}</Text> */}
   
        {/* <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div> */}
          {/* <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div> */}

        {data.map(e => (
          <div key={e.node.slug} className="app__specialMenu_menu_items">
            <Text>{e.node.name}</Text>
            <Text>{e.node.description}</Text>

        </div>
       ))}


      </div>

      <div className="app__specialMenu-menu_img">
        {/* <img src={images.menu} alt="menu__img" /> */}
{/* 
        <GatsbyImage
              image={imageDrink}
              style={{ width: "100%", height: "100%" }}
              alt="vietnamese food"
            /> */}
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        {/* <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div> */}
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>


  </Container>
 )
}
