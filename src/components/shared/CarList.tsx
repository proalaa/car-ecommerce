import CarCard from "@/components/shared/CarCard.tsx";
import { CarApiInterface } from "@/types";
import React from "react";

interface CarListProps {
  filteredCars: CarApiInterface[];
}

const CarList: React.FC<CarListProps> = ({ filteredCars }) => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarList;
