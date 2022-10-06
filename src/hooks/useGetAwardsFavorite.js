import { graphql, useStaticQuery } from 'gatsby'

export const useGetAwardsFavorite = () => {

const data = useStaticQuery(graphql`
  {
    allWpAwardsFavoriteDish {
    edges {
      node {
        id
        slug
        name
        description
        favorites {
          image {
            gatsbyImage(width: 50, placeholder: BLURRED, height: 50, formats: AUTO)
          }
        }
      }
    }
  }
}
`
    );

    const dataSource = data.allWpAwardsFavoriteDish.edges;
    console.log({dataSource})
    return dataSource;
  }