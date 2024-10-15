import { useState } from "react";
import { useQuery } from "react-query";
import { useSearchContext } from "../contexts/SearchContext";
import * as apiClient from "../api/api-client";
import SearchResultsCard from "../components/SearchResultsCard";
import Pagination from "../components/Pagination";
import SortByFilter from "../components/SortByFilter";
import RentFilter from "../components/RentFilter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Loader2, Filter } from "lucide-react";

const Search = () => {
  const search = useSearchContext();
  const [page, setPage] = useState<number>(1);
  const [selectedPrice, setSelectedPrice] = useState<number | undefined>();
  const [sortOption, setSortOption] = useState<string>();
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const searchParams = {
    location: search.location,
    bedrooms: search.bedrooms.toString(),
    bathrooms: search.bathrooms.toString(),
    page: page.toString(),
    maxPrice: selectedPrice?.toString(),
    sortOption,
  };

  const { data: listingData, isLoading } = useQuery(
    ["searchListings", searchParams],
    () => apiClient.searchListingsRequest(searchParams)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* FILTERS */}
        <Card
          className={`lg:w-64 ${isFilterVisible ? "block" : "hidden lg:block"}`}
        >
          <CardHeader>
            <CardTitle>Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <RentFilter
              selectedPrice={selectedPrice}
              onChange={(value?: number) => setSelectedPrice(value)}
            />
            <Separator className="my-4" />
            <Button
              onClick={() => {
                setPage(1);
                setIsFilterVisible(false);
              }}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white"
            >
              Apply Filters
            </Button>
          </CardContent>
        </Card>

        {/* SEARCH RESULTS */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h1 className="text-2xl font-bold mb-4 sm:mb-0">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                `${listingData?.pagination.total || 0} Places found`
              )}
              {search.location && ` in ${search.location}`}
            </h1>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="lg:hidden"
                onClick={() => setIsFilterVisible(!isFilterVisible)}
              >
                <Filter className="mr-2 h-4 w-4" /> Filters
              </Button>
              <SortByFilter
                sortOption={sortOption}
                onChange={(value) => setSortOption(value)}
              />
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : (
            <div className="space-y-6">
              {listingData?.data.map((listing) => (
                <SearchResultsCard key={listing._id} listing={listing} />
              ))}
            </div>
          )}

          <div className="mt-8">
            <Pagination
              page={listingData?.pagination.page || 1}
              pages={listingData?.pagination.pages || 1}
              onPageChange={(page) => setPage(page)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
