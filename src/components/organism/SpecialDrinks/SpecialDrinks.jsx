import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { SubHeading } from "../../molecules"
// import { data, images } from '../../constants';
import "./specialDrinks.css"
// import { useGetSpecialDrinks} from "../../../hooks/useGetSpecialDrinks"
import { Button, Container } from "../../ui"
import { useGetColdDrinks } from "../../../hooks/useGetColdDrinks"
import { useGetHotDrinks} from "../../../hooks/useGetHotDrinks"
import { useGetImageDrink } from "../../../hooks/useGetImageDrink"
// import { node } from "prop-types"




export const SpecialDrinks = ({children, ...props}) => {
  const {
    slug,
    specialdrinks: {
      groupText:{
        title,
      subtitle
      },
      image
    },
  } = useGetImageDrink()

const imageText = useGetImageDrink()
console.log(imageText )
const coldDrinks  = useGetColdDrinks()
const hotDrinks  = useGetHotDrinks()


return (
<Container className="about-us flex__center" as="section">
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title={title} />
      {/* <h1 className="headtext__cormorant">{title}</h1> */}
      <h1 className="headtext__cormorant">{subtitle}</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Hot Drinks</p>
      <div className="app__specialMenu_menu_items">
        {hotDrinks.map(e => (
      <div key={e.node.slug}>
          <div className="app__menuitem">
            <div className="app__menuitem-head">
              <div className="app__menuitem-name">
              <p className="p__cormorant" style={{ color: '#DCCA87' }}>{e.node.name}</p>
          </div>
          <div className="app__menuitem-dash" />
          <div className="app__menuitem-price">
            <p className="p__cormorant">€{e.node.hotDrinks.price}</p>
          </div>
        </div>

           <div className="app__menuitem-sub">
             <p className="p__opensans" style={{ color: '#AAAAAA' }}>{e.node.description}</p>
               </div>
           </div>
           
         </div>
        ))} 
        </div>
       </div>

              <div className="app__specialMenu-menu_img">
              {/* <img src={images.menu} alt="menu__img" /> */}

              <GatsbyImage
                  image={getImage(image)}
                  alt="icon-image"
                ></GatsbyImage>
            </div>

              <div className="app__specialMenu-menu_cocktails  flex__center">
                <p className="app__specialMenu-menu_heading">Cocktails</p>
                <div className="app__specialMenu_menu_items">
                {coldDrinks.map(e => (
                <div key={e.node.slug}>
          <div className="app__menuitem">
            <div className="app__menuitem-head">
              <div className="app__menuitem-name">
              <p className="p__cormorant" style={{ color: '#DCCA87' }}>{e.node.name}</p>
          </div>
          <div className="app__menuitem-dash" />
          <div className="app__menuitem-price">
            <p className="p__cormorant">€{e.node.coldDrinks.price}</p>
          </div>
        </div>

           <div className="app__menuitem-sub">
             <p className="p__opensans" style={{ color: '#AAAAAA' }}>{e.node.description}</p>
               </div>
           </div>
           
         </div>
        ))}  
                   </div>
                 </div>
            </div>
       

         <div style={{ marginTop: 15 }}>
           <Button type="button" className="custom__button" >
             View More
           </Button>
         </div>
      </div>
  </Container>
 );
}
