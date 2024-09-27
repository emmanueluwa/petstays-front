import { PlaceType } from "../config/place-options-config";
import { LoginFormData } from "../pages/Login";
import { RegisterFormData } from "../pages/Register";
import { PlaceSearchResponse, SearchParams, UserType } from "../utils/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const fetchCurrentUserRequest = async (): Promise<UserType> => {
  const response = await fetch(`${API_BASE_URL}/api/users/me`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Error fetching user");
  }

  return response.json();
};

export const registerRequest = async (formData: RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};

export const loginRequest = async (formData: LoginFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.message);
  }

  return body;
};

export const validateTokenRequest = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Token invalid");
  }

  return response.json();
};

export const logoutRequest = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    credentials: "include",
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Error");
  }
};

export const addMyPlaceRequest = async (placeFormData: FormData) => {
  const response = await fetch(`${API_BASE_URL}/api/my-places`, {
    method: "POST",
    credentials: "include",
    body: placeFormData,
  });

  if (!response.ok) {
    throw new Error("Failed to add place");
  }

  return response.json();
};

export const fetchMyPlacesRequest = async (): Promise<PlaceType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/my-places`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching places");
  }

  return response.json();
};

export const fetchMyPlaceByIdRequest = async (
  placeId: string
): Promise<PlaceType> => {
  const response = await fetch(`${API_BASE_URL}/api/my-places/${placeId}`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching places");
  }

  return response.json();
};

export const updateMyPlaceByIdRequest = async (placeFormData: FormData) => {
  const response = await fetch(
    `${API_BASE_URL}/api/my-places/${placeFormData.get("placeId")}`,
    {
      method: "PUT",
      body: placeFormData,
      credentials: "include",
    }
  );

  if (!response) {
    throw new Error("failed to update place");
  }

  return response.json();
};

export const searchPlacesRequest = async (
  searchParams: SearchParams
): Promise<PlaceSearchResponse> => {
  const queryParams = new URLSearchParams();

  queryParams.append("destination", searchParams.destination || "");
  queryParams.append("checkIn", searchParams.checkIn || "");
  queryParams.append("checkOut", searchParams.checkOut || "");
  queryParams.append("adultCount", searchParams.adultCount || "");
  queryParams.append("childCount", searchParams.childCount || "");
  queryParams.append("page", searchParams.page || "");

  queryParams.append("maxPrice", searchParams.maxPrice || "");
  queryParams.append("sortOption", searchParams.sortOption || "");

  searchParams.facilities?.forEach((facility) => {
    queryParams.append("facilities", facility);
  });

  searchParams.types?.forEach((type) => queryParams.append("types", type));
  searchParams.stars?.forEach((star) => queryParams.append("stars", star));

  const response = await fetch(
    `${API_BASE_URL}/api/places/search?${queryParams}`
  );

  if (!response.ok) {
    throw new Error("Error fetching places");
  }

  return response.json();
};

export const fetchPlaceByIdRequest = async (
  placeId: string
): Promise<PlaceType> => {
  const response = await fetch(`${API_BASE_URL}/api/places/${placeId}`);

  if (!response.ok) {
    throw new Error("Error fetching places");
  }

  return response.json();
};
