import type { ComponentProps } from "react";
import { Button } from "./ui/button";

type BookAppointmentButtonProps = ComponentProps<typeof Button>;

export default function BookAppointmentButton(
  props: BookAppointmentButtonProps
) {
  return (
    <Button size="lg" asChild {...props}>
      <a href="https://calendly.com/yanivt" target="_blank">
        Book Appointment
      </a>
    </Button>
  );
}
