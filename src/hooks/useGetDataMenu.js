import { graphql, useStaticQuery } from 'gatsby'

export const useGetDataMenu = () => {

  const data = useStaticQuery(graphql`
  {
    allWpSection{
      edges{
        node{
          title
          slug
          menu{
            title
            description
            mainImage{
              gatsbyImage(width:848,height:400)
            }
          }
        }
      }
    }
  }  
  `
  );


  const dataSource = data.allWpSection.edges.filter(e => e.node.slug === 'menu')[0].node;


  return dataSource;

}

