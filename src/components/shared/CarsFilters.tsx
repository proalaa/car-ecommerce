import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { CarApiInterface, CarFilterInterface } from "@/types";

interface CarsFilterProps {
  filters: CarFilterInterface;
  setFilters: React.Dispatch<React.SetStateAction<CarFilterInterface>>;
  cars: CarApiInterface[];
}

const CarsFilter: React.FC<CarsFilterProps> = ({
  filters,
  setFilters,
  cars,
}) => {
  const [makeOptions, setMakeOptions] = useState<string[]>([]);
  const [modelOptions, setModelOptions] = useState<string[]>([]);
  const [yearOptions, setYearOptions] = useState<string[]>([]);

  useEffect(() => {
    const makeSet = new Set<string>();
    cars.forEach((car) => makeSet.add(car.make));
    setMakeOptions(Array.from(makeSet));

    const modelSet = new Set<string>();
    cars.forEach((car) => modelSet.add(car.model));
    setModelOptions(Array.from(modelSet));

    const yearSet = new Set<string>();
    cars.forEach((car) => yearSet.add(car.year));
    setYearOptions(Array.from(yearSet));
  }, [cars]);

  return (
    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div>
        <Label htmlFor="make">Make</Label>
        <Select
          name="make"
          value={filters.make}
          onValueChange={(value) => setFilters({ ...filters, make: value })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select make" />
          </SelectTrigger>
          <SelectContent>
            {makeOptions.map((make) => (
              <SelectItem key={make} value={make}>
                {make}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="model">Model</Label>
        <Select
          name="model"
          value={filters.model}
          onValueChange={(value) => setFilters({ ...filters, model: value })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select model" />
          </SelectTrigger>
          <SelectContent>
            {modelOptions.map((model) => (
              <SelectItem key={model} value={model}>
                {model}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="year">Year</Label>
        <Select
          name="year"
          value={filters.year}
          onValueChange={(value) => setFilters({ ...filters, year: value })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select year" />
          </SelectTrigger>
          <SelectContent>
            {yearOptions.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="priceRange">Price Range</Label>
        <input
          type="range"
          min={0}
          max={100000}
          step={1000}
          value={filters.priceRange[1]}
          onChange={(e) =>
            setFilters({
              ...filters,
              priceRange: [filters.priceRange[0], parseInt(e.target.value)],
            })
          }
        />
        <div>
          {filters.priceRange[0]} - {filters.priceRange[1]}
        </div>
      </div>
    </div>
  );
};

export default CarsFilter;
