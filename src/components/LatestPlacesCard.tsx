import { Link } from "react-router-dom";
import { PlaceType } from "../config/place-options-config";

type Props = {
  place: PlaceType;
};

const LatestPlacesCard = ({ place }: Props) => {
  return (
    <Link
      to={`/detail/${place._id}`}
      className="relative cursor-pointer overflow-hidden rounded-md"
    >
      <div className="h-[300px]">
        <img
          src={place.imageUrls[0]}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute bottom-0 p-4 bg-black bg-opacity-50 w-full rounded-b-md ">
        <span className="text-white font-bold tracking-tight text-3xl">
          {place.name}
        </span>
      </div>
    </Link>
  );
};

export default LatestPlacesCard;
