"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Clock,
  FileText,
  MapPin,
  Phone,
  User,
  X,
} from "lucide-react";

interface AppointmentDetailsProps {
  appointmentId: string | null;
  onClose: () => void;
}

export function AppointmentDetails({
  appointmentId,
  onClose,
}: AppointmentDetailsProps) {
  if (!appointmentId) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <FileText className="h-12 w-12 text-gray-400 mb-4" />
        <h3 className="font-medium text-lg mb-2">No Appointment Selected</h3>
        <p className="text-sm text-muted-foreground">
          Select an appointment to view details
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-lg">Appointment Details</h3>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-6">
        <div>
          <Label className="text-muted-foreground">Patient Information</Label>
          <div className="mt-2 space-y-2">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <span>Emma Wilson</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <Label className="text-muted-foreground">Appointment Information</Label>
          <div className="mt-2 space-y-2">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>Monday, January 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>09:00 AM (1 hour)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>Room 3, Floor 2</span>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <Label className="text-muted-foreground">Treatment Details</Label>
          <p className="mt-2">Tooth cleaning and general check-up</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Regular cleaning and examination of teeth and gums
          </p>
        </div>

        <div className="flex gap-3">
          <Button className="flex-1" variant="outline">
            Reschedule
          </Button>
          <Button className="flex-1" variant="destructive">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}