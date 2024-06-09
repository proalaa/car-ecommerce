import { CarApiInterface } from "@/types";
import React from "react";
import { Link } from "react-router-dom";

interface CarInfoProps {
  car: CarApiInterface;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void; // Optional onClick handler
}
const CarCard: React.FC<CarInfoProps> = ({ car, onClick }) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (onClick) {
      onClick(event);
    }
  };
  return (
    <div
      onClick={handleClick}
      key={car.id}
      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
    >
      <Link to={`/car/${car.id}`} className="absolute inset-0 z-10">
        <span className="sr-only">
          View {car.make} {car.model}
        </span>
      </Link>
      <img
        src={car?.imageUrl}
        alt={`${car?.make} ${car?.model}`}
        width={500}
        height={300}
        className="h-64 w-full object-cover"
      />
      <div className="bg-white p-4 dark:bg-gray-950">
        <h3 className="font-bold text-xl">
          {car.make} {car.model}
        </h3>
        <p className="text-lg font-semibold">${car.price.toLocaleString()}</p>
        <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
          <span>{car?.year}</span>
          <span>{car?.mileage?.toLocaleString()} mi</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
          <span>{car?.transmission}</span>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
