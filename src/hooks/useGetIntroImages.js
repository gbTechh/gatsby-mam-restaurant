import { graphql, useStaticQuery } from 'gatsby'

export const useGetIntroImages = () => {

  const data = useStaticQuery(graphql`
  {
    allWpSection{
      edges{
        node{
          slug
          introParallax{                  
            imageParallaxMobil{
              localFile{
                childImageSharp{
                    fluid(quality: 90, maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
              }
            }
            imageParallaxDesktop{
              localFile{
                childImageSharp{
                    fluid(quality: 90, maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
              }
            }
          }
        }
      }
    }
  }  
  `
  );


  const dataSource = data.allWpSection.edges.filter(e => e.node.slug === 'intro-parallax')[0].node.introParallax;


  return dataSource;

}

