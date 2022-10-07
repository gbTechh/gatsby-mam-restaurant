import { graphql, useStaticQuery } from 'gatsby'

export const useGetMenuTypes = () => {

  const data = useStaticQuery(graphql`
  {
    allWpMenuType{
      nodes{
        name
        description
        slug
        menuTaxonomy{
          image{
            gatsbyImage(width:150, height:150)
          }
        }
      }
    }
  }
  
  
  `
  );

  const dataSource = data.allWpMenuType.nodes;


  return dataSource;

}

