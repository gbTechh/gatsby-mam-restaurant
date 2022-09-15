import { graphql, useStaticQuery } from 'gatsby'

export const useLogo = () => {

  const logo = useStaticQuery(graphql`
  {
    allWpPage(filter: {isFrontPage: {eq: true}}) {
      edges {
        node {         
          homeAcf {
            logo {
              gatsbyImage(width:63, height:60)            
            }
          }
        }
      }
    }
  }`
  );

  const logoSource = logo.allWpPage.edges[0].node.homeAcf.logo;


  return logoSource;

}

