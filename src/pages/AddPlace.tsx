import { useAppContext } from "../contexts/AppContext";
import ManagePlaceForm from "../forms/ManagePlaceForm/ManagePlaceForm";
import * as apiClient from "../api/api-client";
import { useMutation } from "react-query";

const AddPlace = () => {
  const { showToast } = useAppContext();

  const { mutate, isLoading } = useMutation(apiClient.addMyPlaceRequest, {
    onSuccess: () => {
      showToast({ message: "Place saved", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Error saving place", type: "ERROR" });
    },
  });

  const handleSave = (placeFormData: FormData) => {
    mutate(placeFormData);
  };

  return <ManagePlaceForm onSave={handleSave} isLoading={isLoading} />;
};

export default AddPlace;
