import { useState, useEffect, useMemo } from "react";
import CarsFilters from "@/components/shared/CarsFilters.tsx";
import CarList from "@/components/shared/CarList.tsx";
import HeroSection from "@/components/home/HeroSection.tsx";
import { CarApiInterface, CarFilterInterface } from "@/types";
import { getCars } from "@/service.ts";

export default function Home() {
  const [filters, setFilters] = useState<CarFilterInterface>({
    make: "",
    model: "",
    year: 0,
    priceRange: [0, 100000],
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [cars, setCars] = useState<CarApiInterface[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      const carsData = await getCars();
      setCars(carsData);
    };
    fetchCars();
  }, []);

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const makeMatch = !filters.make || filters.make === car.make;
      const modelMatch = !filters.model || filters.model === car.model;
      const yearMatch = !filters.year || filters.year === car.year;
      const priceMatch =
        car?.price >= filters.priceRange[0] &&
        car.price <= filters.priceRange[1];
      const searchMatch =
        car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase());
      return makeMatch && modelMatch && yearMatch && priceMatch && searchMatch;
    });
  }, [filters, searchTerm, cars]);

  return (
    <div>
      <HeroSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <section className="container mx-auto px-4 py-8">
        <CarsFilters filters={filters} cars={cars} setFilters={setFilters} />
      </section>
      <CarList filteredCars={filteredCars} />
    </div>
  );
}
