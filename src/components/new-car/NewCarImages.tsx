import React, { useState, useRef } from "react";
import { useFormContext, Controller } from "react-hook-form";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera } from "lucide-react";

export default function NewCarImages() {
  const { setValue, control } = useFormContext();
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const formData = new FormData();

    files.forEach((file) => {
      formData.append("images", file);
    });

    try {
      await axios.post("http://localhost:3001/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const newImages = files.map((file) => URL.createObjectURL(file));
      setImages((prevImages) => [...prevImages, ...newImages]);
      setValue("images", newImages);
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <Controller
        name="images"
        control={control}
        render={({ fieldState }) => (
          <>
            <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
              <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                <Camera className="h-6 w-6" />
                <span className="text-sm">Photos</span>
                <span className="text-xs text-gray-500">
                  Add up to 3 photos
                </span>
              </div>
              <Button variant="outline" type="button" onClick={handleClick}>
                Upload
              </Button>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleUpload}
                ref={fileInputRef}
                className="hidden"
              />
            </div>
            {fieldState.error && (
              <span className="text-red-500">{fieldState.error.message}</span>
            )}
          </>
        )}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Card key={index} className="p-0">
            <img
              src={image}
              alt={`Upload ${index}`}
              className="object-cover h-48 w-full"
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
