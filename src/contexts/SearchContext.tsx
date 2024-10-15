import React, { useContext, useState } from "react";

type SearchContext = {
  location: string;
  bedrooms: string;
  bathrooms: string;
  listingId: string;
  saveSearchValues: (
    location: string,
    bedrooms: string,
    bathrooms: string
  ) => void;
};

const SearchContext = React.createContext<SearchContext | undefined>(undefined);

type SearchContextProviderProps = {
  children: React.ReactNode;
};

export const SearchContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  const [location, setLocation] = useState<string>(
    () => sessionStorage.getItem("location") || ""
  );
  const [bedrooms, setBedrooms] = useState<string>(
    () => sessionStorage.getItem("bedrooms") || "1"
  );
  const [bathrooms, setBathrooms] = useState<string>(
    () => sessionStorage.getItem("bathrooms") || "1"
  );
  const [listingId, setListingId] = useState<string>(
    () => sessionStorage.getItem("listingId") || ""
  );

  const saveSearchValues = (
    location: string,
    bedrooms: string,
    bathrooms: string,
    listingId?: string
  ) => {
    setLocation(location);
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
    <SearchContext.Provider
      value={{
        location,
        bedrooms,
        bathrooms,
        listingId,
        saveSearchValues,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  return context as SearchContext;
};
