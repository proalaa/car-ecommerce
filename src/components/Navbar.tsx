import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { Menu, Car } from "lucide-react";
import { Link } from "react-router-dom";

export default function Component() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md dark:bg-gray-950 dark:text-gray-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Car />
          <span className="text-lg font-bold">Cars Ecommerce</span>
        </Link>
        <nav className="hidden gap-4 md:flex">
          <Link
            to="new-car"
            className="text-sm font-medium hover:text-blue-500"
          >
            Add Car
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu size={24} color="currentColor" />{" "}
              {/* Use Menu icon from Lucide */}
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-4 p-4">
              <Link to="/" className="flex items-center gap-2">
                <Car />
                <span className="text-lg font-bold">Car Dealer</span>
              </Link>
              <nav className="grid gap-2">
                <Link
                  to="new-car"
                  className=" text-xl font-medium hover:text-blue-500"
                >
                  Add Car
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
