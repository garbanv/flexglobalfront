import { fetchAPI } from "@/app/utils/fetch-api";


export async function getHomePage() {
    const query ='?populate=slideshow.image&populate=whatWeOffer.offerCard.image&populate=aboutCompany.image&populate=projects.image.image&populate=getConsultations.image&populate=testimonials.testimonialsCard.image&populate=team.teamCard.image'
    const path = process.env.APP_URL + "/api/homepage"+query;
    return await fetchAPI(path, { method: "GET" });
  }