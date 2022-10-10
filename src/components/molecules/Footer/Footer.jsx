import React from "react"
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"
import { Container, Spacer, Text } from "../../ui"

import { FooterOverlay } from "../Footer/FooterOverlay"
// import { images } from '../../constants';
import "./Footer.css"

export const Footer = () => (
  <Container className="footer">
    <div className="app__footer section__padding" id="login">
      <FooterOverlay />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <Text ff="head" size="h2">
            Contact Us
          </Text>
          <Spacer y="5" />
          <Text ff="head">9 W 53rd St, New York, NY 10019, USA</Text>
          <Text ff="head">+1 212-344-1230</Text>
          <Text ff="head">+1 212-555-1230</Text>
        </div>

        <div className="app__footer-links_logo">
          {/* <img src={images.gericht} alt="footer_logo" /> */}
          <Text ff="head">
            &quot;The best way to find yourself is to lose yourself in the
            service of others.&quot;
          </Text>
          {/* <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} /> */}
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="app__footer-links_work">
          <Text ff="head" size="h2">
            Working Hours
          </Text>
          <Spacer y="5" />
          <Text ff="head">Monday-Friday:</Text>
          <Text ff="head">08:00 am - 12:00 am</Text>
          <Text ff="head">Saturday-Sunday:</Text>
          <Text ff="head">07:00 am - 11:00 pm</Text>
        </div>
      </div>

      <div className="footer__copyright">
        <Text>2021 Mam. All Rights reserved.</Text>
      </div>
    </div>
  </Container>
)
