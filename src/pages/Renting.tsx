import { useState } from "react";
import { useSearchRentContext } from "../contexts/SearchRentContext";
import { useQuery } from "react-query";
import * as apiClient from "../api/api-client";

const Renting = () => {
  const search = useSearchRentContext();

  const [page, setPage] = useState<number>(1);

  const [selectedStars, setSelectedStars] = useState<string[]>([]);
  const [selectedPlaceTypes, setSelectedPlaceTypes] = useState<string[]>([]);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<number | undefined>();
  const [sortOption, setSortOption] = useState<string>();

  const searchParams = {
    destination: search.location,
    adultCount: search.bedrooms.toString(),
    childCount: search.bathrooms.toString(),
    page: page.toString(),
    maxPrice: selectedPrice?.toString(),
    sortOption,
  };

  const { data: listingData } = useQuery(["searchListings", searchParams], () =>
    apiClient.searchListingsRequest(searchParams)
  );

  const handleStarsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const starRating = event.target.value;

    setSelectedStars((prevStars) =>
      event.target.checked
        ? [...prevStars, starRating]
        : prevStars.filter((star) => star !== starRating)
    );
  };

  const handleHotelTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const placeType = event.target.value;

    setSelectedPlaceTypes((prevPlaceType) =>
      event.target.checked
        ? [...prevPlaceType, placeType]
        : prevPlaceType.filter((pType) => pType !== placeType)
    );
  };

  const handleFacilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const facilities = event.target.value;

    setSelectedFacilities((prevFacilities) =>
      event.target.checked
        ? [...prevFacilities, facilities]
        : prevFacilities.filter((facility) => facility !== facilities)
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      {/* FILTERS  */}
      <div className="rounded-lg border border-slate-300 p-5 h-fit sticky top-10">
        <div className="space-y-5">
          <h3 className="text-lg font-semibold border-b border-slate-300 pb-5">
            Filter by:
          </h3>
          <StarRatingFilter
            selectedStars={selectedStars}
            onChange={handleStarsChange}
          />
          <PlaceTypesFilter
            selectedPlaceTypes={selectedPlaceTypes}
            onChange={handleHotelTypeChange}
          />
          <FacilitiesFilter
            selectedFacilities={selectedFacilities}
            onChange={handleFacilityChange}
          />
          <PriceFilter
            selectedPrice={selectedPrice}
            onChange={(value?: number) => setSelectedPrice(value)}
          />
        </div>
      </div>

      {/* SEARCH RESULTS */}
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">
            {placeData?.pagination.total} Places found
            {search.destination ? ` in ${search.destination}` : ""}
          </span>

          {/* SORT BY FILTER */}
          <SortByFilter
            sortOption={sortOption}
            onChange={(value) => setSortOption(value)}
          />
        </div>
        {placeData?.data.map((place) => (
          <SearchResultsCard place={place} />
        ))}
        <div>
          <Pagination
            page={placeData?.pagination.page || 1}
            pages={placeData?.pagination.pages || 1}
            onPageChange={(page) => setPage(page)}
          />
        </div>
      </div>
    </div>
  );
};
export default Renting;
