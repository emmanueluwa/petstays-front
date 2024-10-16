import { useQuery } from "react-query";
import * as apiClient from "../api/api-client";
import LatestListingsCard from "../components/LatestListingsCard";

const Renting = () => {
  const { data: listings } = useQuery("fetchQuery", () =>
    apiClient.fetchListingsRequest()
  );

  const topRowPlaces = listings?.slice(0, 2) || [];
  const bottomRowPlaces = listings?.slice(2) || [];

  return (
    <div className="space-y-3">
      <h2 className="text-3xl font-bold">Latest Listings</h2>
      <p>Most recent pet friendly rental listings available in the uk</p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {topRowPlaces.map((listing) => (
          <LatestListingsCard key={listing._id} listing={listing} />
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {bottomRowPlaces.map((listing) => (
          <LatestListingsCard key={listing._id} listing={listing} />
        ))}
      </div>
    </div>
  );
};

export default Renting;
