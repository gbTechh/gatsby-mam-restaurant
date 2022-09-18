import { graphql, useStaticQuery } from 'gatsby'

export const useImageHeroParallax = () => {

  const data = useStaticQuery(graphql`
  {
    allWpPage(filter: {isFrontPage: {eq: true}}) {
      edges {
        node {        
          homeAcf {
            imageParallax{
              gatsbyImage(width:2200, height:1000)
            }   
            imageParallaxMobil{
              gatsbyImage(width:760)
            }
          }
        }
      }
    }
  }
  `
  );

  const dataSource = data.allWpPage.edges[0].node.homeAcf;


  return dataSource;

}

