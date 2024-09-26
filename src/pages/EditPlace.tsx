import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../api/api-client";
import ManagePlaceForm from "../forms/ManagePlaceForm/ManagePlaceForm";
import { useAppContext } from "../contexts/AppContext";

const EditPlace = () => {
  const { placeId } = useParams();
  const { showToast } = useAppContext();

  const { data: place } = useQuery(
    "fetchMyPlaceById",
    //will never run if empty - a con of ts :()
    () => apiClient.fetchMyPlaceByIdRequest(placeId || ""),

    {
      //only run query - call api - if we placeId is available
      enabled: !!placeId,
    }
  );

  const { mutate, isLoading } = useMutation(
    apiClient.updateMyPlaceByIdRequest,
    {
      onSuccess: () => {
        showToast({ message: "Place saved", type: "SUCCESS" });
      },
      onError: () => {
        showToast({ message: "Error saving place", type: "ERROR" });
      },
    }
  );

  const handleSave = (placeFormData: FormData) => {
    mutate(placeFormData);
  };

  return (
    <ManagePlaceForm place={place} onSave={handleSave} isLoading={isLoading} />
  );
};

export default EditPlace;
