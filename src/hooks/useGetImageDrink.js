import { graphql, useStaticQuery } from 'gatsby'

export const useGetImageDrink = () =>{

    const data = useStaticQuery(graphql`
    {
      allWpSection {
        edges {
          node {
            slug
            specialdrinks {
              groupText {
                title
                subtitle
              }
              image {
                gatsbyImage(formats: AUTO, width: 410, placeholder: BLURRED)
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