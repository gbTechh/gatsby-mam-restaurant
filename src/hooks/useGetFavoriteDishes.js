import { graphql, useStaticQuery } from 'gatsby'

export const useGetFavoriteDishes = () => {

  const data = useStaticQuery(graphql`
    {
        allWpSection {
            edges {
              node {
                slug
                favoriteDishes {
                  title
                  subtitle
                  mainImage {
                    gatsbyImage(width: 350, formats: AUTO, placeholder: BLURRED, height: 450)
                  }
                  backgroundImageDesktop {
                    gatsbyImage(width: 1920, placeholder: BLURRED, formats: AUTO)
                  }
                  backgroundImageMobil {
                    gatsbyImage(width: 768, placeholder: BLURRED, formats: AUTO)
                  }
                }
              }
            }
          }
    }
  `
  );

  const dataSource = data.allWpSection.edges.filter(e => e.node.slug === 'favorite-dishes')[0].node;


  return dataSource;
}