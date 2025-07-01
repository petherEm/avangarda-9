// Configuration mapping for video assets across modules
export const VIDEO_CONFIG = {
  hero: {
    videoSrc: "intro_reduced_2",
    fallbackImage: "/bg-hero.png",
    fallbackAlt: "Hero background",
    showProgress: true,
  },
  spa: {
    videoSrc: "spa_reduced",
    fallbackImage: "/spa-loading.png",
    fallbackAlt: "Spa background",
  },
  business: {
    videoSrc: "business_reduced",
    fallbackImage: "/business-loading.png",
    fallbackAlt: "Business background",
  },
  gastro: {
    videoSrc: "gastro_reduced",
    fallbackImage: "/rest-loading.jpeg",
    fallbackAlt: "Restaurant background",
  },
  events: {
    videoSrc: "wedding",
    fallbackImage: "/wedding-loading.png",
    fallbackAlt: "Events background",
  },
  entertainment: {
    videoSrc: "entertain_reduced",
    fallbackImage: "/enter-loading.jpeg",
    fallbackAlt: "Entertainment background",
  },
  offers: {
    videoSrc: "entertain_reduced", // Same as entertainment
    fallbackImage: "/enter-loading.jpeg",
    fallbackAlt: "Offers background",
  },
  rooms: {
    videoSrc: "hotel_reduced-2",
    fallbackImage: "/business-loading.png", // Note: rooms uses business-loading
    fallbackAlt: "Hotel rooms background",
  },
} as const;

export type VideoConfigKey = keyof typeof VIDEO_CONFIG;
