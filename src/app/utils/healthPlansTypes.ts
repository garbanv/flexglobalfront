export interface HealthPlansTypes {

    heading1: string
    heading2: string
    locale:string
    content:string
    featuredImage:{
      url: string;
    }
    contentSide: {
      sectionId:string
      content:string
      buttonText:string
      buttonLink:string
      contentTitleLine1:string
      contentTitleLine2:string
      image: {
        url: string;
      };
    }[]

}