import { useSearchContext } from "../contexts/SearchContext";
import * as apiClient from "../api/api-client";
import { useQuery } from "react-query";
import { useState } from "react";
import SearchResultsCard from "../components/SearchResultsCard";
import Pagination from "../components/Pagination";
import SortByFilter from "../components/SortByFilter";
import RentFilter from "../components/RentFilter";

const Search = () => {
  const search = useSearchContext();

  const [page, setPage] = useState<number>(1);

  const [selectedPrice, setSelectedPrice] = useState<number | undefined>();
  const [sortOption, setSortOption] = useState<string>();

  const searchParams = {
    location: search.location,
    bedrooms: search.bedrooms.toString(),
    bathrooms: search.bathrooms.toString(),
    page: page.toString(),
    maxPrice: selectedPrice?.toString(),
    sortOption,
  };

  const { data: listingData } = useQuery(["searchListings", searchParams], () =>
    apiClient.searchListingsRequest(searchParams)
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      {/* FILTERS  */}
      <div className="rounded-lg border border-slate-300 p-5 h-fit sticky top-10">
        <div className="space-y-5">
          <h3 className="text-lg font-semibold border-b border-slate-300 pb-5">
            Filter by:
          </h3>
          <RentFilter
            selectedPrice={selectedPrice}
            onChange={(value?: number) => setSelectedPrice(value)}
          />
        </div>
      </div>

      {/* SEARCH RESULTS */}
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">
            {listingData?.pagination.total} Places found
            {search.location ? ` in ${search.location}` : ""}
          </span>

          {/* SORT BY FILTER */}
          <select
            value={sortOption}
            onChange={(event) => setSortOption(event.target.value)}
            className="p-2 border rounded-md"
          >
            <option value="">Sort By</option>
            <option value="pricePerMonthAsc">
              Price Per Month (low to high)
            </option>
            <option value="pricePerMonthDesc">
              Price Per Month (high to low)
            </option>
          </select>
          {/* <SortByFilter
            sortOption={sortOption}
            onChange={(value) => setSortOption(value)}
          /> */}
        </div>
        {listingData?.data.map((listing) => (
          <SearchResultsCard key={listing._id} listing={listing} />
        ))}
        <div>
          <Pagination
            page={listingData?.pagination.page || 1}
            pages={listingData?.pagination.pages || 1}
            onPageChange={(page) => setPage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
