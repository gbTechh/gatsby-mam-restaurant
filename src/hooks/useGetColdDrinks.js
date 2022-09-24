import { graphql, useStaticQuery } from 'gatsby'

export const useGetColdDrinks = () =>{

    const data = useStaticQuery(graphql`
    {
      allWpColdDrink {
        edges {
          node {
            name
            description
            coldDrinks {
              price
            }
          }
        }
      }
    } 
    `
    ); 

    const dataSource = data.allWpColdDrink.edges;


    return dataSource;
}
