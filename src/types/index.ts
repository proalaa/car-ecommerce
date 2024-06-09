export interface CarApiInterface {
  id: number;
  make: string;
  model: string;
  year: string;
  mileage: string;
  transmission: string;
  fuelType: string;
  price: number;
  imageUrl: string;
}

export interface CarFilterInterface {
  make: string;
  model: string;
  year: string;
  priceRange: [number, number];
}

export interface BuyerApiInterface {
  name: string;
  email: string;
  phone: string;
  address: string;
}
