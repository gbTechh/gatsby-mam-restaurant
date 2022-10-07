import { graphql, useStaticQuery } from 'gatsby'

export const useGetHotDrinks = () =>{

    const data = useStaticQuery(graphql`
    {
      allWpHotDrink {
        edges {
          node {
            name
            slug
            description
            hotDrinks {
              price
            }
          }
        }
      }
    }
    `
    ); 

    const dataSource = data.allWpHotDrink.edges;
  

    return dataSource;
}
