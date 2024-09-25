import { Link } from "react-router-dom";
import * as apiClient from "../api/api-client";
import { useQuery } from "react-query";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";

const MyPlaces = () => {
  const { data: placeData } = useQuery(
    "fetchMyPlaces",
    apiClient.fetchMyPlacesRequest,
    { onError: () => {} }
  );

  if (!placeData) {
    return <span>No Places found</span>;
  }

  return (
    <div className="space-y-5">
      <span className="flex justify-between">
        <h1 className="text-3xl font-bold">My Places</h1>
        <Link
          to="/add-place"
          className="flex bg-teal-500 text-white text-xl font-bold p-2 hover:bg-teal-400"
        >
          Add Place
        </Link>
      </span>
      <div className="grid grid-cols-1 gap-8">
        {placeData.map((place) => (
          <div className="flex flex-col justify-between border border-slate-300 rounded-lg p-8 gap-5">
            <h2 className="text-2xl font-bold">{place.name}</h2>
            <div className="white-pre-line">{place.description}</div>
            <div className="grid grid-cols-5 gap-2">
              <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                <BsMap className="mr-1" />
                {place.city}, {place.country}
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                <BsBuilding className="mr-1" />
                {place.type}
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                <BiMoney className="mr-1" />£{place.pricePerNight} per night
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                <BiHotel className="mr-1" />
                {place.adultCount} adults, {place.childCount} children
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                <BiStar className="mr-1" />
                {place.starRating} Star rating
              </div>
            </div>
            <span className="flex justify-end">
              <Link
                to={`/edit-place/${place._id}`}
                className="flex bg-teal-500 text-white text-xl font-bold p-2 hover:bg-teal-400"
              >
                View details
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPlaces;
