import { graphql, useStaticQuery } from 'gatsby'

export const useImageHeroParallax = () => {

  const data = useStaticQuery(graphql`
  {
    allWpPage(filter: {isFrontPage: {eq: true}}) {
      edges {
        node {        
          homeAcf {
            imageParallax{
              gatsbyImage(width:1800, height:1000)
            }   
          }
        }
      }
    }
  }
  `
  );

  const dataSource = data.allWpPage.edges[0].node.homeAcf.imageParallax;


  return dataSource;

}

