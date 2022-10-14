import { graphql, useStaticQuery } from 'gatsby'

export const useGetCarMenuImage = () => {

  const data = useStaticQuery(graphql`
    {
      allWpSection{
        edges{
          node{
            slug
            menu{
              cartMenu{
                gatsbyImage( quality:100, height:900)
              }
            }
          }
        }
      }	
    }  
    `
  );


  const dataSource = data.allWpSection.edges.filter(e => e.node.slug === 'menu')[0].node.menu.cartMenu;

  return dataSource;
}
