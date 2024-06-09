import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { CarApiInterface } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCarsBasedOnMake(
  cars: CarApiInterface[],
  make: string,
  excludeId?: number,
  count: number = 10,
): CarApiInterface[] {
  return cars
    .filter((car) => car.make === make && car.id !== excludeId)
    .slice(0, count);
}
