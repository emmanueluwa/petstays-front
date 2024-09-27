import { useQuery } from "react-query";
import * as apiClient from "../api/api-client";
import LatestPlacesCard from "../components/LatestPlacesCard";

const Home = () => {
  const { data: places } = useQuery("fetchQuery", () =>
    apiClient.fetchPlacesRequest()
  );

  const topRowPlaces = places?.slice(0, 2) || [];
  const bottomRowPlaces = places?.slice(2) || [];

  return (
    <div className="space-y-3">
      <h2 className="text-3xl font-bold">Latest Places</h2>
      <p>Most recent destinations added by members of the community</p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {topRowPlaces.map((place) => (
          <LatestPlacesCard place={place} />
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {bottomRowPlaces.map((place) => (
          <LatestPlacesCard place={place} />
        ))}
      </div>
    </div>
  );
};

export default Home;
