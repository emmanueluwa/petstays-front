import { PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-teal-600 to-teal-700 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
            Find Your Perfect Pet-Friendly Home
          </h1>
          <p className="text-xl text-teal-100 mb-8">
            Discover comfortable spaces for you and your furry friends across
            multiple areas.
          </p>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="bg-white text-teal-600 hover:bg-teal-100"
          >
            <Link to="/areas">Explore All Areas</Link>
          </Button>
          <div className="mt-12 flex justify-center items-center text-teal-100">
            <PawPrint className="mr-2" size={24} />
            <span className="text-lg">
              Thousands of pet-friendly listings available
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
