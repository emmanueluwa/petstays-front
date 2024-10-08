import { useFormContext } from "react-hook-form";
import { placeTypes } from "../../config/place-options-config";
import { PlaceFormData } from "./ManagePlaceForm";

const TypeSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<PlaceFormData>();

  //storing changes
  const typeWatch = watch("type");

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Type</h2>
      <div className="grid grid-cols-5 gap-2">
        {placeTypes.map((type) => (
          <label
            className={
              typeWatch === type
                ? "curser-pointer bg-teal-100 text-sm rounded-full px-4 py-2 font-semibold"
                : "curser-pointer bg-gray-300 text-sm rounded-full px-4 py-2 font-semibold"
            }
          >
            <input
              type="radio"
              value={type}
              {...register("type", { required: "This field is required" })}
              className="hidden"
            />
            <span>{type}</span>
          </label>
        ))}
      </div>
      {errors.type && (
        <span className="text-red-500 text-sm font-bold">
          {errors.type.message}
        </span>
      )}
    </div>
  );
};

export default TypeSection;
