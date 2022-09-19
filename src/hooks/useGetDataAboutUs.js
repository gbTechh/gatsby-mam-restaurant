import { graphql, useStaticQuery } from 'gatsby'

export const useGetDataAboutUs = () => {

  const data = useStaticQuery(graphql`
  {
    allWpSection{
      edges{
        node{
          title
          slug
          aboutus{   
            imagen{
              gatsbyImage( height:400)
            }
            ourHistory{
              title
              description
            }
            aboutUs{
              title
              description
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


  const dataSource = data.allWpSection.edges.filter(e => e.node.slug === 'aboutus')[0].node;


  return dataSource;

}

