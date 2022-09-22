import { graphql, useStaticQuery } from 'gatsby'


export const useGetSpecialDrinks = () =>{

    const data = useStaticQuery(graphql`{
        allWpSection {
            nodes {
              specialdrinks {
                groupText {
                  title
                  subtitle
                }
                image {
                  gatsbyImage(width: 410, formats: AUTO, placeholder: BLURRED)
                  altText
                  slug
                }
              }
            }
          }
          allWpColdDrink {
            nodes {
              name
              description
              coldDrinks {
                price
              }
            }
          }
          allWpHotDrink {
            nodes {
              name
              description
              hotDrinks {
                price
              }
            }
          }
    }
    `
    );

    const dataSource = data.allWpSection.nodes;


    return dataSource;
}

 