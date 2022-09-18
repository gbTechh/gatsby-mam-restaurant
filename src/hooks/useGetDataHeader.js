import { graphql, useStaticQuery } from 'gatsby'

export const useGetDataHeader = () => {

  const data = useStaticQuery(graphql`
  {
    allWpPage(filter: {isFrontPage: {eq: true}}) {
      edges {
        node {
          homeAcf {
            titleTextHeader
            subtitleTextHeader
            shortDescriptionHeader          
          }
        }
      }
    }
  }
  `
  );

  const dataSource = data.allWpPage.edges[0].node.homeAcf;


  return dataSource;

}

