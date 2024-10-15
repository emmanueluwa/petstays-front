import { Link } from "react-router-dom";
import { ListingType } from "../utils/types";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";

type Props = {
  listing: ListingType;
};

const SearchResultsCard = ({ listing }: Props) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] border border-slate-300 rounded-lg p-8 gap-8">
      <div className="w-full h-[300px]">
        <img
          src={listing.images[0]}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="grid grid-rows-[1fr_2fr_1fr]">
        <div>
          <div className="flex items-center">
            <span className="ml-1 text-sm">{listing.area}</span>
          </div>
          <Link
            to={`/detail/${listing._id}`}
            className="text-2xl font-bold cursor-pointer"
          >
            {listing.title}
          </Link>
        </div>

        <div>
          <div className="line-clamp-4">{listing.description}</div>
        </div>

        <div className="grid grid-cols-2 items-end whitespace-nowrap">
          <div className="flex gap-1 items-center">
            <span className="bg-slate-300 p-2 rounded-lg font-bold text-xs whitespace-nowrap">
              {listing.bedrooms}
              <span>
                <BiBed />
              </span>
            </span>
            <span className="bg-slate-300 p-2 rounded-lg font-bold text-xs whitespace-nowrap">
              {listing.bathrooms}
              <BiBath />
            </span>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="font-bold">{listing.price} per month</span>
            <Link
              to={`/detail/${listing._id}`}
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
