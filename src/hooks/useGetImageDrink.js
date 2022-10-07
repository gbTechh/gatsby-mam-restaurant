import { graphql, useStaticQuery } from 'gatsby'

export const useGetImageDrink = () =>{

    const data = useStaticQuery(graphql`
    {
      allWpSection {
        edges{
          node {
            slug
          specialdrinks {
            groupText {
              title
              subtitle
            }
            drinkTitle {
              drinksCold
              hotDrink
            }
            image {
              gatsbyImage(formats: AUTO, width: 400, placeholder: BLURRED, height: 700)
            }
          }
        }
      }
      }
        }   
    `
    ); 
    const dataSource = data.allWpSection.edges.filter(e => e.node.slug === 'special-drinks')[0].node;



    return dataSource;
}