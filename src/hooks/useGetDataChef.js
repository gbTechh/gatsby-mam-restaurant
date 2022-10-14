import { graphql, useStaticQuery } from 'gatsby'

export const useGetDataChef = () => {

  const data = useStaticQuery(graphql`
  {
    allWpSection{
      edges{
        node{
          slug
          chef{
            titles {
              mainTitle
              subtitle
            }
            sign{
              gatsbyImage(width:250)
            }
            description
            nameChefs
            jobPosition
            imageChefs{
              gatsbyImage(width:450, height:600)
            }
            backgroundImageMobil{
							localFile{
                childImageSharp{
                    fluid(quality: 90, maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
              }
            }
            backgroundImageDesktop{
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


  const dataSource = data.allWpSection.edges.filter(e => e.node.slug === 'chef')[0].node;


  return dataSource;

}

