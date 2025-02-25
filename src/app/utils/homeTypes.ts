export interface TestimonialsProps {
    client: string;
    clientPosition: string;
    message: string;
    image: {
      url: string;
    };
  }
  
 export  interface Member {
    name: string
    image:{
      url: string
    }
    lastname: string
    position: string
    memberLink: string
  }
  
  export interface HomeData {
    data: {
      slideshow?: {
        callToAction: string;
        heading: string;
        id: number;
        link: string;
        subheading: string;
        image: {
          url: string;
        };
      }[];
      whatWeOffer?: {
        subheading: string;
        heading: string;
        offerCard: {
          text: string;
          description: string;
          link: string;
          linkText: string;
          image: {
            url: string;
          };
        }[];
      };
      aboutCompany?: {
        imageText: string;
        imageDescriptiontext: string;
        aboutCompanyText: string;
        title: string;
        description: string;
        image: {
          url: string;
        };
      };
      projects?: {
        heading: string;
        image: {
          image: {
            url: string;
          };
          imageLink: string;
        }[];
        sectionTitle: string;
      };
      getConsultations?: {
        callToAction : string
        callToActionUrl: string
        content: string 
        getConsultationsText: string
        heading: string
        image: {
          url: string
        }
      };
      testimonials?: {
        heading: string;
      testimonialsCard: TestimonialsProps[];
      testimonialsText: string;
      };
      team?: {
        heading: string
      teamCard: Member[]
      teamText: string
      };
    };
  }


  