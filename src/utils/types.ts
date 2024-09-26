import { PlaceType } from "../config/place-options-config";

export type PlaceSearchResponse = {
  data: PlaceType[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
};
