import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ChattingModal from "@/components/shared/ChattingModal";

import SimilarCars from "@/components/car-details/SimilarCars.tsx";
import BuyerInfo from "@/components/car-details/BuyerInfo.tsx";
import CarInfo from "@/components/car-details/CarInfo.tsx";
import { CarApiInterface } from "@/types";
import { getCarsBasedOnMake } from "@/lib/utils.ts";

export default function CarDetails() {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<CarApiInterface | null>(null);
  const [similarCars, setSimilarCars] = useState<CarApiInterface[]>([]);

  useEffect(() => {
    if (!id) return;
    fetch(`/cars.json`)
      .then((response) => response.json())
      .then((data: CarApiInterface[]) => {
        const selectedCar = data.find((car) => car.id === parseInt(id));
        setCar(selectedCar || null);
        setSimilarCars(
          getCarsBasedOnMake(
            data,
            selectedCar?.make ?? "",
            selectedCar?.id || 0,
          ),
        );
      });
  }, [id]);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <main className="flex-1">
        <section className="w-full py-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <img
                  src={car.imageUrl}
                  alt="Car Image"
                  width={800}
                  height={600}
                  className="aspect-[4/3] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                />
              </div>
              <div className="flex flex-col items-start space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  {car.year} {car.make} {car.model}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-0.5">
                    {/* Add StarIcon here */}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">
                    (32 reviews)
                  </div>
                </div>
                <div className="text-4xl font-bold">{car.price}</div>
                <div className="flex gap-4">
                  <Button size="lg">
                    <ShareIcon className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <ChattingModal />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 ">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2">
            <CarInfo car={car} />
            <BuyerInfo />
          </div>
        </section>
        <section className="w-full py-12 md:py-24  bg-gray-100 dark:bg-gray-800">
          <SimilarCars similarCars={similarCars} />
        </section>
      </main>
    </div>
  );
}

function ShareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
  );
}
