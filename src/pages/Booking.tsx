import { useQuery } from "react-query";
import * as apiClient from "../api/api-client";
import BookingForm from "../forms/BookingForm/BookingForm";
import { useSearchContext } from "../contexts/SearchContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BookingDetailSummary from "../components/BookingDetailSummary";

const Booking = () => {
  const search = useSearchContext();
  const { placeId } = useParams();

  const [numberOfNights, setNumberOfNight] = useState<number>(0);

  useEffect(() => {
    if (search.checkIn && search.checkOut) {
      const nights =
        Math.abs(search.checkOut.getTime() - search.checkIn.getTime()) /
        (1000 * 60 * 60 * 24);

      setNumberOfNight(Math.ceil(nights));
    }
  }, [search.checkIn, search.checkOut]);

  const { data: place } = useQuery(
    "fetchPlaceById",
    () => apiClient.fetchPlaceByIdRequest(placeId as string),
    { enabled: !!placeId }
  );

  const { data: currentUser } = useQuery(
    "fetchCurrentUser",
    apiClient.fetchCurrentUserRequest
  );

  if (!place) {
    return <></>;
  }

  return (
    <div className="grid md:grid-cols-[1fr_2fr]">
      <BookingDetailSummary
        checkIn={search.checkIn}
        checkOut={search.checkOut}
        adultCount={search.adultCount}
        childCount={search.childCount}
        numberOfNights={numberOfNights}
        place={place}
      />
      {currentUser && <BookingForm currentUser={currentUser} />}
    </div>
  );
};

export default Booking;
