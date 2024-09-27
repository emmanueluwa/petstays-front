import { useParams } from "react-router-dom";
import * as apiClient from "../api/api-client";
import { useQuery } from "react-query";
import { AiFillStar } from "react-icons/ai";
import GuestInfoForm from "../forms/GuestInfoForm/GuestInfoForm";

const Detail = () => {
  const { placeId } = useParams();

  const { data: place } = useQuery(
    "fetchPlaceById",
    () => apiClient.fetchPlaceByIdRequest(placeId as string),
    {
      enabled: !!placeId,
    }
  );

  if (!place) {
    return <></>;
  }

  return (
    <div className="space-y-6">
      <div>
        <span className="flex">
          {Array.from({ length: place.starRating }).map(() => (
            <AiFillStar className="fill-yellow-400" />
          ))}
        </span>
        <h1 className="text-3xl font-bold">{place.name}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {place.imageUrls.map((image) => (
          <div className="h-[300px]">
            <img
              src={image}
              alt={place.name}
              className="rounded-md w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
        {place.facilities.map((facility) => (
          <div className="border border-slate-300 rounded-sm p-3">
            {facility}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
        <div className="whitespace-pre-line">{place.description}</div>
        <div className="h-fit">
          <GuestInfoForm
            pricePerNight={place.pricePerNight}
            placeId={place._id}
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
