import { graphql, useStaticQuery } from 'gatsby'

export const useGetDataAboutUs = () => {

  const data = useStaticQuery(graphql`
  {
    allWpSection{
      edges{
        node{
          title
          slug
          featuredImage{
            node{
              localFile{
                childImageSharp{
                    fluid(quality: 90, maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
              }
            }
          }
          aboutus{   
            imagen{
              gatsbyImage( height:600)
            }
            ourHistory{
              title
              description
            }
            aboutUs{
              title
              description
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

