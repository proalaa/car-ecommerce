import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";

interface HeroSectionProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <img
        src="/hero-image.jpeg"
        alt="Hero Car"
        width={1200}
        height={600}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center gap-6 px-4 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Find Your Dream Car
        </h1>
        <p className="max-w-[600px] text-lg md:text-xl">
          Browse our extensive collection of high-quality vehicles and find the
          perfect car for your needs.
        </p>
        <div className="flex w-full max-w-md items-center gap-2">
          <Input
            type="text"
            placeholder="Search for a car..."
            value={searchTerm.toString()}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
          <Button>Search</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
