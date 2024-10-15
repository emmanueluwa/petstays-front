import { PawPrint } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-teal-600 to-teal-700 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
            Find Your Perfect Pet-Friendly Home
          </h1>

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
