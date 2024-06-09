import { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import NewCarInformation from "@/components/new-car/NewCarInformation.tsx";
import NewCarPricing from "@/components/new-car/NewCarPricing.tsx";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";
import { updateCars } from "@/service.ts";
import NewCarImages from "@/components/new-car/NewCarImages.tsx";
import { CarApiInterface } from "@/types";

const carSchema = z.object({
  model: z.string().min(1, { message: "Model is required" }),
  year: z.string().min(1, { message: "Year is required" }),
  make: z.string().min(1, { message: "Make is required" }),
  mileage: z.string().regex(/^\d+$/, { message: "Mileage must be a number" }),
  transmission: z.string().min(1, { message: "Transmission is required" }),
  engine: z.string().min(1, { message: "Engine is required" }),
  price: z.string().regex(/^\d+$/, { message: "Price must be a number" }),
  images: z
    .array(z.string())
    .min(1, { message: "At least one image is required" })
    .max(3, { message: "you can't upload more than 3 images" }),
});

type CarFormValues = z.infer<typeof carSchema>;

export default function NewCar() {
  const methods = useForm<CarFormValues>({
    resolver: zodResolver(carSchema),
  });

  const navigate = useNavigate();
  const { handleSubmit, reset, control } = methods;
  const [loading, setLoading] = useState(false);

  const doUpdateCars = async (newData: Array<CarApiInterface>) => {
    try {
      await updateCars(newData);
      console.log("Car data updated successfully!");
    } catch (error) {
      console.error("Error updating cars.json:", error);
    }
  };

  const onSubmit: SubmitHandler<CarFormValues> = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const response = await fetch("/cars.json");
      const cars = await response.json();
      const newCar = {
        id: cars.length + 1,
        ...data,
        imageUrl: data.images[0], // Assuming only one image for simplicity
      };
      cars.push(newCar);
      await doUpdateCars(cars);
      reset();
      navigate("/");
    } catch (error) {
      console.error("Error adding car:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full py-12">
      <main className="px-4 md:max-w-4xl mx-auto my-12">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <NewCarInformation />
            <NewCarPricing />
            <NewCarImages />

            <div className="flex justify-end pt-10 mt-10 border-t-2">
              <Button type="submit" disabled={loading} className={"w-full"}>
                {loading ? "Saving..." : "Save"}
              </Button>
            </div>
          </form>
        </FormProvider>

        <DevTool control={control} />
      </main>
    </div>
  );
}
