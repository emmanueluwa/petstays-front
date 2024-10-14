import React, { useContext, useState } from "react";

type SearchRentContext = {
  location: string;
  bedrooms: number;
  bathrooms: number;
  listingId: string;
  saveSearchValues: (
    location: string,
    bedrooms: number,
    bathrooms: number
  ) => void;
};

const SearchRentContext = React.createContext<SearchRentContext | undefined>(
  undefined
);

type SearchRentContextProviderProps = {
  children: React.ReactNode;
};

export const SearchRentContextProvider = ({
  children,
}: SearchRentContextProviderProps) => {
  const [location, setLoaction] = useState<string>(
    () => sessionStorage.getItem("location") || ""
  );
  const [bedrooms, setBedrooms] = useState<number>(() =>
    parseInt(sessionStorage.getItem("bedrooms") || "1")
  );
  const [bathrooms, setBathrooms] = useState<number>(() =>
    parseInt(sessionStorage.getItem("bathrooms") || "1")
  );
  const [listingId, setListingId] = useState<string>(
    () => sessionStorage.getItem("listingId") || ""
  );

  const saveSearchValues = (
    location: string,
    bedrooms: number,
    bathrooms: number,
    listingId?: string
  ) => {
    setLoaction(location);
    setBedrooms(bedrooms);
    setBathrooms(bathrooms);

    if (listingId) {
      setListingId(listingId);
    }

    sessionStorage.setItem("location", location);
    sessionStorage.setItem("bedrooms", bedrooms.toString());
    sessionStorage.setItem("bathrooms", bathrooms.toString());

    if (listingId) {
      sessionStorage.setItem("listingId", listingId);
    }
  };

  return (
    <SearchRentContext.Provider
      value={{
        location,
        bedrooms,
        bathrooms,
        listingId,
        saveSearchValues,
      }}
    >
      {children}
    </SearchRentContext.Provider>
  );
};

export const useSearchRentContext = () => {
  const context = useContext(SearchRentContext);
  return context as SearchRentContext;
};
