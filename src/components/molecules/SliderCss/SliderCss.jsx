import React, { useLayoutEffect, useRef } from "react"
import { useState } from "react"
import { Button } from "../../ui"
import { CardSlider } from "../CardSlider"

import "./sliderCss.css"

export const SliderCss = ({ images }) => {
  const [widthCard, setWidthCard] = useState()
  const [translateSlider, setTranslateSlider] = useState(0)
  const btnLeft = useRef()
  const btnRight = useRef()
  const card = useRef()
  const slider = useRef()

  useLayoutEffect(() => {
    setWidthCard(card.current.offsetWidth + 16)
  }, [card])

  const handleRight = () => {
    if (translateSlider >= 0) return
    slider.current.style.transform = `translateX(${
      translateSlider + widthCard
    }px)`
    slider.current.style.transition = `translate 0.3 ease`
    setTranslateSlider(translateSlider + widthCard)
  }

  const handleLeft = () => {
    console.log(widthCard * 6 - 16)
    if (translateSlider * -1 >= widthCard * 5 - 16) return
    slider.current.style.transform = `translateX(${
      translateSlider - widthCard
    }px)`
    slider.current.style.transition = `transform 0.3s ease`
    setTranslateSlider(translateSlider + widthCard * -1)
  }
  return (
    <div className="slider-wrapp">
      <Button
        ref={btnLeft}
        onClick={handleLeft}
        br="circle"
        className="slider-css__btn slider-css__btn--left"
      >
        {"<"}
      </Button>
      <div className="slider-container">
        <div className="slider-css" ref={slider}>
          {images &&
            images.map((e, i) => (
              <CardSlider
                ref={card}
                key={e.title + `${i}`}
                title={e.name}
                image={e.menuTaxonomy.image}
                description={e.description}
              ></CardSlider>
            ))}
        </div>
      </div>
      <Button
        ref={btnRight}
        onClick={handleRight}
        br="circle"
        className="slider-css__btn slider-css__btn--right"
      >
        {">"}
      </Button>
    </div>
  )
}
