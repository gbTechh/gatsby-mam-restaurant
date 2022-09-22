import { graphql, useStaticQuery } from 'gatsby'

export const useGetImageDrink = () =>{

    const data = useStaticQuery(graphql`
    {
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
                }
              }
              slug
            }
          }
        }   
    `
    ); 



    const dataSource = data.useGetImageDrink.nodes;


    return dataSource;
}