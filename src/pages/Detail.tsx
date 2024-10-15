import { useParams } from "react-router-dom";
import * as apiClient from "../api/api-client";
import { useQuery } from "react-query";

const Detail = () => {
  const { listingId } = useParams();

  const { data: listing } = useQuery(
    "fetchListingById",
    () => apiClient.fetchListingByIdRequest(listingId as string),
    {
      enabled: !!listingId,
    }
  );

  if (!listing) {
    return <></>;
  }

  return (
    <div className="space-y-6">
      <div>
        <span className="flex">
          <div>{listing.area}</div>
        </span>
        <h1 className="text-3xl font-bold">{listing.title}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {listing.images.map((image, index) => (
          <div key={index} className="h-[300px]">
            <img
              src={image}
              alt={listing.title}
              className="rounded-md w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
        <div className="border border-slate-300 rounded-sm p-3">
          {listing.bedrooms}&nbsp;bedrooms
        </div>
        <div className="border border-slate-300 rounded-sm p-3">
          {listing.bathrooms}&nbsp;bathrooms
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
        <div className="whitespace-pre-line">{listing.description}</div>
        {/* <div className="h-fit">
          <GuestInfoForm
            pricePerNight={place.pricePerNight}
            placeId={place._id}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Detail;
