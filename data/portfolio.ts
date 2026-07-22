export interface PortfolioItem {
  slug: string;
  clientName: string;
  category: string;
  description: string;
  videoSrc: string;
  poster: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "jyosthna-hospital",
    clientName: "Jyosthna Hospital",
    category: "Social Media",
    description: "Produced a professional video advertisement campaign for Jyosthna Hospital to promote their clinical services.",
    videoSrc: "/portfolio/jyosthna-hospital/video.mp4",
    poster: ""
  },
  {
    slug: "jyosthna-maternity",
    clientName: "Jyosthna Maternity Care",
    category: "Content Marketing",
    description: "Developed maternity education and awareness campaign video series about fetal movement care.",
    videoSrc: "/portfolio/jyosthna-maternity/video.mp4",
    poster: ""
  },
  {
    slug: "preetam-infra",
    clientName: "Preetam Infra",
    category: "Web Design",
    description: "Designed a clean, modern digital presence for a leading infrastructure group, showcasing major hospital construction and development projects.",
    videoSrc: "/portfolio/preetam-infra/video.mp4",
    poster: ""
  },
  {
    slug: "mouli-elites",
    clientName: "Mouli Elites",
    category: "Social Media",
    description: "Drove high-engagement social media campaigns and luxury branding content for a premium community brand.",
    videoSrc: "/portfolio/mouli-elites/video.mp4",
    poster: ""
  },
  {
    slug: "alvision-ads",
    clientName: "Alvision Ads Campaign",
    category: "Social Media",
    description: "Produced a cinematic brand advertisement and video marketing campaign that scaled client brand awareness and engagement.",
    videoSrc: "/portfolio/alvision-ads/video.mp4",
    poster: ""
  }
];
