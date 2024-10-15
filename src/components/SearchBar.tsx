import { useState, FormEvent } from "react";
import { MdTravelExplore } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { useSearchContext } from "../contexts/SearchContext";

type Props = {};

const SearchBar = ({}: Props) => {
  const navigate = useNavigate();
  const search = useSearchContext();

  const [location, setLocation] = useState<string>(search.location);
  const [bedrooms, setBedrooms] = useState<number>(search.bedrooms);
  const [bathrooms, setBathrooms] = useState<number>(search.bathrooms);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    //take values from local state and save them to global state
    search.saveSearchValues(location, bedrooms, bathrooms);

    navigate("/search");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="-mt-8 p-3 bg-teal-400 rounded shadow-md grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 items-center gap-4"
    >
      <div className="flex flex-row items-center flex-1 bg-white p-2">
        <MdTravelExplore size={25} className="mr-2" />
        <input
          placeholder="Where to?"
          className="text-md w-full focus:outline-none"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </div>

      <div className="flex bg-white px-2 py-1 gap-2 ">
        <label className="items-center flex">
          Bedrooms:
          <input
            className="w-full p-1 focus:outline-none font-bold"
            type="number"
            min={1}
            max={12}
            value={bedrooms}
            onChange={(event) => setBedrooms(parseInt(event.target.value))}
          ></input>
        </label>
        <label className="items-center flex">
          Bathrooms:
          <input
            className="w-full p-1 focus:outline-none font-bold"
            type="number"
            min={0}
            max={10}
            value={bathrooms}
            onChange={(event) => setBathrooms(parseInt(event.target.value))}
          ></input>
        </label>
      </div>
      <div className="flex gap-1">
        <button className="w-2/3 bg-teal-800 text-white h-full p-2 font-bold text-xl hover:bg-teal-600">
          Search
        </button>
        <button className="w-1/3 bg-red-400 text-white h-full p-2 font-bold text-xl hover:bg-red-300">
          Clear
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
