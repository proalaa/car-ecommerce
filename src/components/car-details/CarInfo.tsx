import { CarApiInterface } from "@/types";
import React from "react";

interface CarInfoProps {
  car?: CarApiInterface;
}

const CarInfo: React.FC<CarInfoProps> = ({ car }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Car Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Make
          </div>
          <div>{car?.make}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Model
          </div>
          <div>{car?.model}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Year
          </div>
          <div>{car?.year}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Mileage
          </div>
          <div>{car?.mileage}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Transmission
          </div>
          <div>{car?.transmission}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Fuel Type
          </div>
          <div>{car?.fuelType}</div>
        </div>
      </div>
    </div>
  );
};

export default CarInfo;
