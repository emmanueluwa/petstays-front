import { Link } from "react-router-dom";
import { ListingType } from "../utils/types";
import { BiBed, BiBath, BiArea, BiMap } from "react-icons/bi";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Props = {
  listing: ListingType;
};

const SearchResultsCard = ({ listing }: Props) => {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] gap-4">
        <div className="relative h-[300px] xl:h-full">
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-full object-cover object-center"
          />
          <Badge className="absolute top-2 left-2 bg-teal-600 text-white">
            {listing.area}
          </Badge>
        </div>
        <CardContent className="flex flex-col justify-between p-4">
          <div>
            <h2 className="text-2xl font-bold mb-2 hover:text-teal-600 transition-colors">
              <Link to={`/detail/£{listing._id}`}>{listing.title}</Link>
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {listing.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="flex items-center gap-1">
              <BiBed className="w-4 h-4" />
              {listing.bedrooms}{" "}
              {listing.bedrooms === 1 ? "Bedroom" : "Bedrooms"}
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <BiBath className="w-4 h-4" />
              {listing.bathrooms}{" "}
              {listing.bathrooms === 1 ? "Bathroom" : "Bathrooms"}
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <BiArea className="w-4 h-4" />
              {listing.area} sqft
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <BiMap className="w-4 h-4" />
              {listing.location}
            </Badge>
          </div>
          <CardFooter className="flex justify-between items-center p-0">
            <span className="text-2xl font-bold text-teal-600">
              £{listing.price}/month
            </span>
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link to={`/detail/£{listing._id}`}>View Details</Link>
            </Button>
          </CardFooter>
        </CardContent>
      </div>
    </Card>
  );
};

export default SearchResultsCard;
