import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";

export default function NewCarPricing() {
  const { control } = useFormContext();

  return (
    <section className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Pricing</h3>
      <div className="flex">
        <Controller
          name="price"
          control={control}
          render={({ field, fieldState }) => (
            <div className={"flex flex-col gap-3"}>
              <Input
                placeholder="Price"
                type={"number"}
                className="w-full"
                {...field}
              />
              {fieldState.error && (
                <span className="text-red-500">{fieldState.error.message}</span>
              )}
            </div>
          )}
        />
      </div>
    </section>
  );
}
