import { useQuery } from "react-query";
import * as apiClient from "../api/api-client";
import LatestListingsCard from "../components/LatestListingsCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { useState } from "react";

const Home = () => {
  const [visibleListings, setVisibleListings] = useState(5);
  const {
    data: listings,
    isLoading,
    isError,
  } = useQuery("fetchListings", () => apiClient.fetchListingsRequest());

  const loadMore = () => {
    setVisibleListings((prev) => prev + 3);
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <div className="grid md:grid-cols-2 gap-4">
          <Skeleton className="h-[300px]" />
          <Skeleton className="h-[300px]" />
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <Skeleton className="h-[300px]" />
          <Skeleton className="h-[300px]" />
          <Skeleton className="h-[300px]" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to load listings. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }

  const displayedListings = listings?.slice(0, visibleListings) || [];

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold text-gray-800">Latest Places</h1>
        <p className="text-xl text-gray-600">
          Discover the most recent pet-friendly destinations added by our
          community
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedListings.map((listing) => (
          <LatestListingsCard key={listing._id} listing={listing} />
        ))}
      </div>

      {listings && visibleListings < listings.length && (
        <div className="flex justify-center mt-8">
          <Button
            onClick={loadMore}
            className="bg-teal-600 hover:bg-teal-700 text-white"
          >
            Load More
          </Button>
        </div>
      )}

      {listings && listings.length === 0 && (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>No Listings</AlertTitle>
          <AlertDescription>
            There are currently no listings available. Check back later for new
            pet-friendly homes!
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default Home;
