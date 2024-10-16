import { Link } from "react-router-dom";
import { ListingType } from "../utils/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Home } from "lucide-react";

type Props = {
  listing: ListingType;
};

const LatestListingsCard = ({ listing }: Props) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <Link to={`/detail/${listing._id}`} className="block">
        <div className="relative aspect-video">
          <img
            src={listing?.images[0] || "/placeholder-home.jpg"}
            alt={listing.title}
            className="w-full h-full object-cover object-center"
          />
          <Badge className="absolute top-2 left-2 bg-teal-600 text-white">
            New Listing
          </Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
            {listing.title}
          </h3>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {listing.description}
          </p>
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Home className="w-4 h-4 mr-1" />
            <span>{listing.area}</span>
          </div>
        </CardContent>
        <CardFooter className="px-4 py-3 bg-gray-50 flex justify-between items-center">
          <div className="flex space-x-4">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1 text-teal-600" />
              <span className="text-sm">{listing.bedrooms} Beds</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1 text-teal-600" />
              <span className="text-sm">{listing.bathrooms} Baths</span>
            </div>
          </div>
          <span className="font-semibold text-teal-600">
            £{listing.price}/mo
          </span>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default LatestListingsCard;
