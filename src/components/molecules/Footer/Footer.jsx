import React from "react"
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"
import { Container, Spacer, Text } from "../../ui"

import { FooterOverlay } from "../Footer/FooterOverlay"
// import { images } from '../../constants';
import "./Footer.css"
import { useGetDataContact } from "../../../hooks/useGetDataContact"
import { Link } from "gatsby"
import { Facebook } from "../../atoms"
import { Instagram } from "../../atoms/Icons/Instagram"

export const Footer = () => {
  const date = new Date()

  const {
    slug,
    id,
    contact: {
      titlesContact: { mainTitle, subtitle },
      direction,
      hours,
      phone,
      socialMedia: { facebook, instagram },
    },
  } = useGetDataContact()

  let phonesArr = phone.split(",").filter((e) => e)
  let hoursArr = hours.split("*").filter((e) => e)

  return (
    <Container className="footer">
      <div className="app__footer section__padding" id="login">
        <FooterOverlay />

        <div className="app__footer-links">
          <div className="app__footer-links_contact">
            <Text ff="head" size="h2">
              Contact Us
            </Text>
            <Spacer y="5" />
            <Text ff="head">{direction}</Text>
            {phonesArr.map((e) => (
              <Text key={e} ff="head">
                {e}
              </Text>
            ))}
          </div>

          <div className="app__footer-links_logo">
            {/* <img src={images.gericht} alt="footer_logo" /> */}
            <Text ff="head">
              &quot;The best way to find yourself is to lose yourself in the
              service of others.&quot;
            </Text>
            {/* <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} /> */}
            <div className="app__footer-links_icons">
              <Link
                to={facebook}
                style={{ display: "grid", placeItems: "center" }}
              >
                <Facebook />
              </Link>
              <Link
                to={instagram}
                style={{ display: "grid", placeItems: "center" }}
              >
                <Instagram />
              </Link>
            </div>
          </div>

          <div className="app__footer-links_work">
            <Text ff="head" size="h2">
              Working Hours
            </Text>
            <Spacer y="5" />
            {hoursArr.map((e) => (
              <Text ff="head" key={e}>
                {e}
              </Text>
            ))}
          </div>
        </div>

        <div className="footer__copyright">
          <Text>{date.getFullYear()} Mam. All Rights reserved.</Text>
        </div>
      </div>
    </Container>
  )
}
