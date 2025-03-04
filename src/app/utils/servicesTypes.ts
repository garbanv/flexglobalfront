export interface ServicesData {
  heading1: string;
  heading2: string;
  locale: string;
  content: string;
  featuredImage: {
    url: string;
  };
  contentSide: {
    content: string;
    buttonText: string;
    buttonLink: string;
    contentTitleLine1: string;
    contentTitleLine2: string;
    image: {
      url: string;
    };
  };
  serviceCard: {
    id: number;
    description: string;
    link: string;
    title: string;
    image: {
      url: string;
    }
  }[]
}
