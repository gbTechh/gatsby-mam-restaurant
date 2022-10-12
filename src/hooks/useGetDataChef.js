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
              gatsbyImage(width:450, height:550)
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

