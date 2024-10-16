import { PlaceType } from "../config/place-options-config";

export type UserType = {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type ListingType = {
  _id: string;
  area: string;
  title: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  max_tenants: string;
  location: string;
  description: string;
  images: string[];
  url: string;
};

export type AreaType = {
  name: string;
  _id: string;
};

export type PlaceSearchResponse = {
  data: PlaceType[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
};

export type ListingSearchResponse = {
  data: ListingType[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
};

export type SearchParams = {
  destination?: string;
  checkIn?: string;
  checkOut?: string;
  adultCount?: string;
  childCount?: string;
  page?: string;
  facilities?: string[];
  types?: string[];
  stars?: string[];
  maxPrice?: string;
  sortOption?: string;
};

export type SearchRentParams = {
  location?: string;
  bedrooms?: string;
  bathrooms?: string;
  page?: string;
  maxPrice?: string;
  sortOption?: string;
};

export type PaymentIntentResponse = {
  paymentIntentId: string;
  clientSecret: string;
  totalCost: number;
};

export type BookingType = {
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  adultCount: number;
  childCount: number;
  checkIn: Date;
  checkOut: Date;
  totalCost: number;
};
