import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api/api-client";
import { useAppContext } from "../contexts/AppContext";
import { Button } from "@/components/ui/button";
import { Loader2, LogOut } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface LogoutProps {
  onClick?: () => void;
}

const Logout: React.FC<LogoutProps> = ({ onClick }) => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const mutation = useMutation(apiClient.logoutRequest, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      showToast({ message: "Logged out successfully", type: "SUCCESS" });
      setIsDialogOpen(false);
      if (onClick) onClick();
    },
    onError: (error: Error) => {
      showToast({
        message: "Failed to logout. Please try again.",
        type: "ERROR",
      });
      setIsDialogOpen(false);
    },
  });

  const handleLogout = () => {
    mutation.mutate();
  };

  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" className="text-white hover:bg-teal-500">
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to logout?</AlertDialogTitle>
          <AlertDialogDescription>
            You will be signed out of your account and redirected to the home
            page.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleLogout}
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <LogOut className="mr-2 h-4 w-4" />
            )}
            Logout
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Logout;
