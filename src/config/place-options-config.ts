export type PlaceType = {
  _id: string;
  userId: string;
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  adultCount: number;
  childCount: number;
  facilities: string[];
  pricePerNight: number;
  starRating: number;
  imageUrls: string[];
  lastUpdated: Date;
};

export const placeTypes = [
  "Budget",
  "Boutique",
  "Luxury",
  "Ski Resort",
  "Business",
  "Family",
  "Romantic",
  "Hiking Resort",
  "Cabin",
  "Beach Resort",
  "Golf Resort",
  "Penthouse",
  "All Inclusive",
  "Self Catering",
];

export const placeFacilities = [
  "Free WiFi",
  "Snooker Table",
  "Balcony",
  "Parking",
  "Airport Shuttle",
  "Family Rooms",
  "Non-Smoking Rooms",
  "Outdoor Pool",
  "Spa",
  "Fitness Center",
];
