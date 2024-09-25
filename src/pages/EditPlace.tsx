import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as api from "../api/api-client";
import ManagePlaceForm from "../forms/ManagePlaceForm/ManagePlaceForm";

const EditPlace = () => {
  const { placeId } = useParams();

  const { data: place, isLoading } = useQuery(
    "fetchMyPlaceById",
    //will never run if empty - a con of ts :()
    () => api.fetchMyPlaceByIdRequest(placeId || ""),

    {
      //only run query - call api - if we placeId is available
      enabled: !!placeId,
    }
  );

  if (!place) {
    return null;
  }

  return <ManagePlaceForm place={place} isLoading={isLoading} />;
};

export default EditPlace;
