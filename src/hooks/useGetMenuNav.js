import { graphql, useStaticQuery } from 'gatsby'

export const useGetMenuNav = () => {

  const data = useStaticQuery(graphql`
  {
    allWpSection {
      edges {
        node {
          slug
          title
          orderSection{
            order
          }
        }
      }
    }
  }
  
  `
  );


  console.log({ data })
  const dataSource = data.allWpSection.edges.filter(e => e.node.orderSection?.order).sort((a, b) => a.node.orderSection.order - b.node.orderSection.order);


  return dataSource;

}

