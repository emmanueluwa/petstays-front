import { PlaceType } from "../config/place-options-config";

type Props = {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
  numberOfNights: number;
  place: PlaceType;
};

const BookingDetailSummary = ({
  checkIn,
  checkOut,
  adultCount,
  childCount,
  numberOfNights,
  place,
}: Props) => {
  return (
    <div className="grid gap-4 rounded-lg border border-slate-300 p-5 h-fit">
      <h2 className="text-xl font-bold">Your Booking Details</h2>
      <div className="border-b py-2">
        Location
        <div className="font-bold">{`${place.name}, ${place.city}, ${place.country}`}</div>
      </div>
      <div className="flex justify-between">
        <div>
          Check-in
          <div className="font-bold">{checkIn.toDateString()}</div>
        </div>
        <div>
          Check-out
          <div className="font-bold">{checkOut.toDateString()}</div>
        </div>
      </div>

      <div className="border-t border-b py-2">
        Length of stay:
        <div className="font-bold">{numberOfNights} nights</div>
      </div>

      <div>
        Guests
        <div className="font-bold">
          {adultCount} adults & {childCount} Children
        </div>
      </div>
    </div>
  );
};

export default BookingDetailSummary;
