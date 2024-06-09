import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function NewCarInformation() {
  const { control } = useFormContext();

  return (
    <section className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Car details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <Controller
          name="model"
          control={control}
          render={({ field, fieldState }) => (
            <div>
              <Input placeholder="Model" {...field} />
              {fieldState.error && (
                <span className="text-red-500">{fieldState.error.message}</span>
              )}
            </div>
          )}
        />
        <Controller
          name="year"
          control={control}
          render={({ field, fieldState }) => (
            <div>
              <Select {...field} onValueChange={(val) => field.onChange(val)}>
                <SelectTrigger id="model-year">
                  <SelectValue placeholder="Select Model Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                </SelectContent>
              </Select>
              {fieldState.error && (
                <span className="text-red-500">{fieldState.error.message}</span>
              )}
            </div>
          )}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <Controller
          name="make"
          control={control}
          render={({ field, fieldState }) => (
            <div>
              <Select {...field} onValueChange={(val) => field.onChange(val)}>
                <SelectTrigger id="make">
                  <SelectValue placeholder="Select Make" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="toyota">Toyota</SelectItem>
                  <SelectItem value="honda">Honda</SelectItem>
                  <SelectItem value="ford">Ford</SelectItem>
                </SelectContent>
              </Select>
              {fieldState.error && (
                <span className="text-red-500">{fieldState.error.message}</span>
              )}
            </div>
          )}
        />
        <Controller
          name="mileage"
          control={control}
          render={({ field, fieldState }) => (
            <div>
              <Input type="number" placeholder="Mileage" {...field} />
              {fieldState.error && (
                <span className="text-red-500">{fieldState.error.message}</span>
              )}
            </div>
          )}
        />
        <Controller
          name="transmission"
          control={control}
          render={({ field, fieldState }) => (
            <div>
              <Select {...field} onValueChange={(val) => field.onChange(val)}>
                <SelectTrigger id="transmission">
                  <SelectValue placeholder="Select Transmission" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="automatic">Automatic</SelectItem>
                  <SelectItem value="manual">Manual</SelectItem>
                </SelectContent>
              </Select>
              {fieldState.error && (
                <span className="text-red-500">{fieldState.error.message}</span>
              )}
            </div>
          )}
        />
        <Controller
          name="engine"
          control={control}
          render={({ field, fieldState }) => (
            <div>
              <Select {...field} onValueChange={(val) => field.onChange(val)}>
                <SelectTrigger id="engine">
                  <SelectValue placeholder="Select Engine" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="v6">V6</SelectItem>
                  <SelectItem value="v8">V8</SelectItem>
                  <SelectItem value="electric">Electric</SelectItem>
                </SelectContent>
              </Select>
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
