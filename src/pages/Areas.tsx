import { useState } from "react";
import { useQuery } from "react-query";
import * as apiClient from "../api/api-client";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, MapPin } from "lucide-react";
import { useSearchContext } from "../contexts/SearchContext";
import { AreaType } from "@/utils/types";

const Areas = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: areas,
    isLoading,
    isError,
  } = useQuery<AreaType[], Error>("fetchAreas", apiClient.fetchAreasRequest);
  const navigate = useNavigate();
  const search = useSearchContext();

  const filteredAreas =
    areas?.filter((area) =>
      area.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const handleAreaClick = (areaName: string) => {
    search.saveSearchValues(areaName, search.bedrooms, search.bathrooms);
    navigate(`/search?location=${encodeURIComponent(areaName)}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Explore Pet-Friendly Areas
      </h1>
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search areas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-teal-600" />
        </div>
      ) : isError ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 mb-8">
            We couldn't load the areas. Please try again later.
          </p>
          <Button onClick={() => window.location.reload()}>Retry</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredAreas.map((area) => (
            <Card key={area._id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <button
                  onClick={() => handleAreaClick(area.name)}
                  className="flex items-center w-full text-left"
                >
                  <MapPin className="h-5 w-5 mr-2 text-teal-600" />
                  <span className="text-lg font-medium text-gray-800">
                    {area.name}
                  </span>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      {filteredAreas.length === 0 && !isLoading && !isError && (
        <p className="text-center text-gray-600">
          No areas found matching your search.
        </p>
      )}
    </div>
  );
};

export default Areas;
