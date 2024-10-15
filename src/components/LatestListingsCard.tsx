import { Link } from "react-router-dom";
import { ListingType } from "../utils/types";

type Props = {
  listing: ListingType;
};

const LatestListingsCard = ({ listing }: Props) => {
  return (
    <Link
      to={`/detail/${listing._id}`}
      className="relative cursor-pointer overflow-hidden rounded-md"
    >
      <div className="h-[300px]">
        <img
          src={listing?.images[0] || ""}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute bottom-0 p-4 bg-black bg-opacity-50 w-full rounded-b-md ">
        <span className="text-white font-bold tracking-tight text-3xl">
          {listing.title}
        </span>
      </div>
    </Link>
  );
};

export default LatestListingsCard;
