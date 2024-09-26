import { placeTypes } from "../config/place-options-config";

type Props = {
  selectedPlaceTypes: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PlaceTypesFilter = ({ selectedPlaceTypes, onChange }: Props) => {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="text-md font-semibold mb-2">Hotel Type</h4>
      {placeTypes.map((placeType) => (
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="rounded"
            value={placeType}
            checked={selectedPlaceTypes.includes(placeType)}
            onChange={onChange}
          />
          <span>{placeType}</span>
        </label>
      ))}
    </div>
  );
};

export default PlaceTypesFilter;
