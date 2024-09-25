import { PlaceType } from "../config/place-options-config";
import { LoginFormData } from "../pages/Login";
import { RegisterFormData } from "../pages/Register";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

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

export const updateMyPlaceById = async (placeFormData: FormData) => {
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
