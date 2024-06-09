import React from "react";
import { CarApiInterface } from "@/types";

import CarCard from "@/components/shared/CarCard.tsx";

interface SimilarCarsProps {
  similarCars: CarApiInterface[];
}

const SimilarCars: React.FC<SimilarCarsProps> = React.memo(
  ({ similarCars }) => {
    const scrollToTop = () => {
      console.log("fd");
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-4">Similar Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {similarCars.map((similarCar) => (
            <CarCard
              car={similarCar}
              key={similarCar.id}
              onClick={scrollToTop}
            />
          ))}
        </div>
      </div>
    );
  },
);

export default SimilarCars;
