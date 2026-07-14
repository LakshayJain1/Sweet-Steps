export interface GoogleReview {
  author: string;
  rating: 5 | 4 | 3 | 2 | 1;
  text: string;
  date: string; // ISO string or "2 months ago"
  profilePhotoUrl?: string;
}

export const googleReviews: GoogleReview[] = [
  // Real Google Reviews - only these 3
  {
    author: "Priyanka Manoj Kulria",
    rating: 5,
    text: "Mrs. Neetu Jain is really amazing at her work. We just loved the casting she did for us. She did it exactly the way we wanted. The quality is outstanding and the prices are worth it. Others are overpriced as we had spoken to others too for the same. So if you are looking for quality work at a justified price please do take her help, I would highly recommend her as she's so far the best. Thank you Neetu Ji 🙏🙏",
    date: "2024-11-20",
  },
  {
    author: "Piyush Bansal",
    rating: 5,
    text: "Absolutely loved the 3D impressions! The baby feet impression came out so detailed and lifelike. We also did a couple impression and the hand casting was beautiful. Highly recommend for preserving special memories with 3D casting!",
    date: "2024-11-10",
  },
  {
    author: "Divyanshu Sharma",
    rating: 5,
    text: "Great work! The hand impressions were very accurate and detailed, love those 3d prints and these guys are jolly people, great to work with!",
    date: "2024-11-05",
  },
];

export const googleBusinessUrl = "https://g.page/sweetsteps-jaipur/review"; // Replace with your actual Google Maps review URL
export const googleBusinessName = "Sweet Steps Impressions";
export const googleTotalReviews = 20; // Total count from Google Business Profile
export const googleAverageRating = 5.0;