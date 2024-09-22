import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api/api-client";
import { useAppContext } from "../contexts/AppContext";

const Logout = () => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();

  const mutation = useMutation(apiClient.logoutRequest, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");

      showToast({ message: "Logged out successfully", type: "SUCCESS" });
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "SUCCESS" });
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <button
      onClick={handleClick}
      className="text-teal-600 px-3 font-bold bg-white hover:bg-gray-100"
    >
      Logout
    </button>
  );
};

export default Logout;
