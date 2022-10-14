import { graphql, useStaticQuery } from 'gatsby'

export const useGetDataGallery = () => {

  const data = useStaticQuery(graphql`
  {
    allWpSection(filter: {slug: {eq: "gallery"}}) {
       edges {
         node {
           slug
           id
           
           gallery{
              backgroundImageMobil{
               localFile{
                 childImageSharp{
                     fluid(quality: 90, maxWidth: 1920) {
                         ...GatsbyImageSharpFluid_withWebp
                     }
                 }
               }
             }
             backgroundImageDekstop{
               localFile{
                 childImageSharp{
                     fluid(quality: 90, maxWidth: 1920) {
                         ...GatsbyImageSharpFluid_withWebp
                     }
                 }
               }
             }
             titlesGallery {
               mainTitle
               subtitle
             }
             linkInstagram
             description
             gallery {
               id
               gatsbyImage(width:350, height:450)
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

