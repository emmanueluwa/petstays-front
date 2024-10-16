// import { useForm } from "react-hook-form";
// import { PaymentIntentResponse, UserType } from "../../utils/types";
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { StripeCardElement } from "@stripe/stripe-js";
// import { useSearchContext } from "../../contexts/SearchContext";
// import { useParams } from "react-router-dom";
// import * as apiClient from "../../api/api-client";
// import { useMutation } from "react-query";
// import { useAppContext } from "../../contexts/AppContext";

// type Props = {
//   currentUser: UserType;
//   paymentIntent: PaymentIntentResponse;
// };

// export type BookingFormData = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   bedrooms: number;
//   bathrooms: number;
//   placeId: string;
//   paymentIntentId: string;
//   totalCost: number;
// };

// const BookingForm = ({ currentUser, paymentIntent }: Props) => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const search = useSearchContext();

//   const { placeId } = useParams();

//   const { showToast } = useAppContext();

//   const { mutate: bookPlace, isLoading } = useMutation(
//     apiClient.createPlaceBookingRequest,
//     {
//       onSuccess: () => {
//         showToast({ message: "Booking complete", type: "SUCCESS" });
//       },
//       onError: () => {
//         showToast({ message: "Booking failed", type: "ERROR" });
//       },
//     }
//   );

//   const { handleSubmit, register } = useForm<BookingFormData>({
//     // defaultValues: {
//     //   firstName: currentUser.firstName,
//     //   lastName: currentUser.lastName,
//     //   email: currentUser.email,
//     //   bedrooms: search.bedrooms,
//     //   bathrooms: search.bathrooms,
//     //   placeId: placeId,
//     //   totalCost: paymentIntent.totalCost,
//     //   paymentIntentId: paymentIntent.paymentIntentId,
//     // },
//   });

//   const onSubmit = async (formData: BookingFormData) => {
//     if (!stripe || !elements) {
//       return;
//     }

//     const result = await stripe.confirmCardPayment(paymentIntent.clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement) as StripeCardElement,
//       },
//     });

//     if (result.paymentIntent?.status === "succeeded") {
//       //most up to dat intent payment id from api call
//       bookPlace({ ...formData, paymentIntentId: result.paymentIntent.id });
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="grid grid-cols-1 gap-5 rounded-lg border border-slate-300 p-5"
//     >
//       <span className="text-3xl font-bold">Confirm Your Details</span>

//       <div className="grid grid-cols-2 gap-6">
//         <label className="text-gray-700 text-sm font-bold flex-1">
//           First Name
//           <input
//             className="mt-1 border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal"
//             type="text"
//             readOnly
//             disabled
//             {...register("firstName")}
//           />
//         </label>
//         <label className="text-gray-700 text-sm font-bold flex-1">
//           Last Name
//           <input
//             className="mt-1 border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal"
//             type="text"
//             readOnly
//             disabled
//             {...register("lastName")}
//           />
//         </label>
//         <label className="text-gray-700 text-sm font-bold flex-1">
//           Email
//           <input
//             className="mt-1 border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal"
//             type="text"
//             readOnly
//             disabled
//             {...register("email")}
//           />
//         </label>
//       </div>

//       <div className="space-y-2">
//         <h2 className="text-xl font-semibold">Your Price Summary</h2>
//         <div className="bg-teal-50 p-4 rounded-md">
//           <div className="font-semibold text-lg">
//             Total Cost: £{paymentIntent.totalCost.toFixed(2)}
//           </div>
//           <div className="text-xs">Includes taxes and charges</div>
//         </div>
//       </div>

//       <div className="space-y-2">
//         <h3 className="text-xl font-semibold">Payment Details</h3>
//         <CardElement
//           id="payment-element"
//           className="border rounded-md p-2 text-sm"
//         />
//       </div>

//       <div className="flex justify-end">
//         <button
//           disabled={isLoading}
//           type="submit"
//           className="bg-teal-800 text-white p-2 font-bold text-md hover:bg-teal-600 disabled:bg-gray-400"
//         >
//           {isLoading ? "Saving..." : "Confirm Booking"}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default BookingForm;
