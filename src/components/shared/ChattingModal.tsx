import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Webcam } from "lucide-react";

export default function ChattingModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size={"lg"}>
          <Webcam className="w-4 h-4 mr-2" />
          Chat with Seller
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Chat with Seller</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <Textarea
            placeholder="Type your message..."
            className="min-h-[100px]"
          />
          <div className="grid gap-2">
            <p className="text-sm font-medium">Quick Questions:</p>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="ghost" size="sm">
                What is the return policy?
              </Button>
              <Button variant="ghost" size="sm">
                How long will shipping take?
              </Button>
              <Button variant="ghost" size="sm">
                Can I customize this item?
              </Button>
              <Button variant="ghost" size="sm">
                Do you offer discounts?
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button>Send Message</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
