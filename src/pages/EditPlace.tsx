import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../api/api-client";
import ManagePlaceForm from "../forms/ManagePlaceForm/ManagePlaceForm";

const EditPlace = () => {
  const { placeId } = useParams();

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
      onSuccess: () => {},
      onError: () => {},
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
