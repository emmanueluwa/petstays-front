import { useState, FormEvent } from "react";
import { MdTravelExplore, MdBed, MdBathtub } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { useSearchContext } from "../contexts/SearchContext";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

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

  const handleClear = () => {
    setLocation("");
    setBedrooms(1);
    setBathrooms(1);
    search.saveSearchValues("", 1, 1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="-mt-8 p-4 bg-teal-100 rounded-lg shadow-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <Label htmlFor="location" className="sr-only">
            Location
          </Label>
          <MdTravelExplore
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500"
            size={20}
          />
          <Input
            id="location"
            placeholder="Where to?"
            className="pl-10 bg-white border-teal-300 focus:border-teal-500 focus:ring-teal-500"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>

        <div className="flex space-x-2">
          <div className="w-1/2 relative">
            <Label htmlFor="bedrooms" className="sr-only">
              Bedrooms
            </Label>
            <MdBed
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500"
              size={20}
            />
            <Input
              id="bedrooms"
              type="number"
              min={1}
              max={12}
              className="pl-10 bg-white border-teal-300 focus:border-teal-500 focus:ring-teal-500"
              value={bedrooms}
              onChange={(event) => setBedrooms(parseInt(event.target.value))}
            />
          </div>
          <div className="w-1/2 relative">
            <Label htmlFor="bathrooms" className="sr-only">
              Bathrooms
            </Label>
            <MdBathtub
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500"
              size={20}
            />
            <Input
              id="bathrooms"
              type="number"
              min={1}
              max={10}
              className="pl-10 bg-white border-teal-300 focus:border-teal-500 focus:ring-teal-500"
              value={bathrooms}
              onChange={(event) => setBathrooms(parseInt(event.target.value))}
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white"
        >
          Search
        </Button>

        <Button
          type="button"
          variant="outline"
          className="w-full border-teal-600 text-teal-600 hover:bg-teal-100"
          onClick={handleClear}
        >
          Clear
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
