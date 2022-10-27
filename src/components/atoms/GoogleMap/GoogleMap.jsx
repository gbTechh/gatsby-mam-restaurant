import React from "react"
import GoogleMapReact from "google-map-react"

import "./googlemap.css"

const defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11,
}

const AnyReactComponent = ({ text }) => <div>{text}</div>

export const GoogleMap = () => (
  <div className="googlemap">
    {/* <GoogleMapReact
      // bootstrapURLKeys={{ key: 'AlzaSyBRKoTpCZsUXfcXyxHxoK-PpXMHYwfqs8o' }}
      bootstrapURLKeys={{ key: "AIzaSyBkVz0NJ8MvwADv_7Vl_YT4rHeyOnuY3ic" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={50.7266386}
        lng={-7.0968639}
        text={"Kreyser Avrora"}
      />
    </GoogleMapReact> */}
    <div style={{ width: "100%" }}>
      <iframe
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Augustijnenstraat%2043,%206511%20KE%20Nijmegen+(MAM%20RESTAURANT)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  </div>
)
