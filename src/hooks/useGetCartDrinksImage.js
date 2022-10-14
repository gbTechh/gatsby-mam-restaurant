import { graphql, useStaticQuery } from 'gatsby'

export const useGetCartDrinksImage = () => {

  const data = useStaticQuery(graphql`
  {
    allWpSection{
      edges{
        node{
          slug
          specialdrinks{
            cartDrinks{
              gatsbyImage( quality:100, height:900)
            }
          }
        }
      }
    }	
  }  
    `
  );


  const dataSource = data.allWpSection.edges.filter(e => e.node.slug === 'special-drinks')[0].node.specialdrinks.cartDrinks;

  return dataSource;
}
