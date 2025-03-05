export interface ResourcesTypes {
    headin1:string
    heading2:string
    heading3:string
    heading4:string
    featuredImage:{
        url:string
    }
    serviceCard:{
        title:string
        description:string
        link:string
        image:{
            url:string
        }
    }[]
}