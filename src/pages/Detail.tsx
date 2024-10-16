import { useParams } from "react-router-dom";
import * as apiClient from "../api/api-client";
import { useQuery } from "react-query";
import { Bed, Bath, Home, MapPin, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Detail = () => {
  const { listingId } = useParams();

  const {
    data: listing,
    isLoading,
    isError,
  } = useQuery(
    ["fetchListingById", listingId],
    () => apiClient.fetchListingByIdRequest(listingId as string),
    {
      enabled: !!listingId,
    }
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-teal-600" />
      </div>
    );
  }

  if (isError || !listing) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-600 mb-8">
          We couldn't find the listing you're looking for. It may have been
          removed or doesn't exist.
        </p>
        <Button asChild>
          <a href="/">Return to Home</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div>
        <Badge className="mb-2 bg-teal-100 text-teal-800">{listing.area}</Badge>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {listing.title}
        </h1>
        <p className="text-gray-600 flex items-center">
          <MapPin className="h-4 w-4 mr-1" /> {listing.location}
        </p>
      </div>

      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {listing.images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="aspect-video">
                <img
                  src={image}
                  alt={`${listing.title} - Image ${index + 1}`}
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex items-center p-4">
            <Bed className="h-5 w-5 mr-2 text-teal-600" />
            <span>{listing.bedrooms} Bedrooms</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-4">
            <Bath className="h-5 w-5 mr-2 text-teal-600" />
            <span>{listing.bathrooms} Bathrooms</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-4">
            <Home className="h-5 w-5 mr-2 text-teal-600" />
            <span>{listing.area} </span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-4">
            <span className="font-bold text-teal-600">£{listing.price}</span>
            <span className="ml-1 text-gray-600">/month</span>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            About this property
          </h2>
          <p className="text-gray-600 whitespace-pre-line">
            {listing.description}
          </p>
        </div>
        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Interested in this property?
              </h3>
              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                <a
                  href={listing.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  Contact Agent
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Detail;
