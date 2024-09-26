import { useSearchContext } from "../contexts/SearchContext";
import * as apiClient from "../api/api-client";
import { useQuery } from "react-query";
import { useState } from "react";

const Search = () => {
  const search = useSearchContext();
  const [page, setPage] = useState<number>(1);

  const searchParams = {
    destination: search.destination,
    checkIn: search.checkIn.toISOString(),
    checkOut: search.checkOut.toISOString(),
    adultCount: search.adultCount.toString(),
    childCount: search.childCount.toString(),
    page: page.toString(),
  };

  const { data: PlaceData } = useQuery(["searchHotels", searchParams], () =>
    apiClient.searchPlacesRequest(searchParams)
  );
  return <div>Search!</div>;
};

export default Search;
