import { graphql, useStaticQuery } from 'gatsby'

export const useGetDataContact = () => {

  const data = useStaticQuery(graphql`
  {
    allWpSection(filter: {slug: {eq: "contact"}}) {
      edges {
        node {
          slug
          id
          contact{
            titlesContact{
              mainTitle
              subtitle
            }
            direction
            hours
            map{
              latitude
              longitude
            }
          }
        }
      }
    }
  }  
  `
  );


  const dataSource = data.allWpSection.edges[0].node;


  return dataSource;

}

