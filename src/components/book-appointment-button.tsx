import type { ComponentProps } from "react";
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";

type BookAppointmentButtonProps = ComponentProps<typeof Button>;

export default function BookAppointmentButton(
  props: BookAppointmentButtonProps
) {
  return (
    <Button
      size="lg"
      className="items-center gap-2 rounded-full"
      asChild
      {...props}
    >
      <a href="#calendly">
        <Calendar className="size-4" />
        <span>Book Appointment</span>
      </a>
    </Button>
  );
}
