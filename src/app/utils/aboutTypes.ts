export interface AboutTypes {
    heading1: string;
    heading2: string;
    featuredImage:{
        url:string
    }
    team:{
        teamText:string
        heading:string
        teamCard:{
            image:{
                url:string
            }
            name:string
            lastname:string
            position:string
            memberLink:string
        }[]
    }
}