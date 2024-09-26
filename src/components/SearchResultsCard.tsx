import { AiFillStar } from "react-icons/ai";
import { PlaceType } from "../config/place-options-config";
import { Link } from "react-router-dom";

type Props = {
  place: PlaceType;
};

const SearchResultsCard = ({ place }: Props) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] border border-slate-300 rounded-lg p-8 gap-8">
      <div className="w-full h-[300px]">
        <img
          src={place.imageUrls[0]}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="grid grid-rows-[1fr_2fr_1fr]">
        <div>
          <div className="flex items-center">
            <span className="flex">
              {Array.from({ length: place.starRating }).map(() => (
                <AiFillStar className="fill-yellow-400" />
              ))}
            </span>
            <span className="ml-1 text-sm">{place.type}</span>
          </div>
          <Link
            to={`/detail/${place._id}`}
            className="text-2xl font-bold cursor-pointer"
          >
            {place.name}
          </Link>
        </div>

        <div>
          <div className="line-clamp-4">{place.description}</div>
        </div>

        <div className="grid grid-cols-2 items-end whitespace-nowrap">
          <div className="flex gap-1 items-center">
            {place.facilities.slice(0, 3).map((facility) => (
              <span className="bg-slate-300 p-2 rounded-lg font-bold text-xs whitespace-nowrap">
                {facility}
              </span>
            ))}
            <span className="text-sm">
              {place.facilities.length > 3 &&
                `+${place.facilities.length - 3} more`}
            </span>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="font-bold">£{place.pricePerNight} per night</span>
            <Link
              to={`/detail/${place._id}`}
              className="bg-teal-600 text-white h-full p-2 font-bold text-xl max-w-fit hover:bg-teal-500"
            >
              View more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsCard;
