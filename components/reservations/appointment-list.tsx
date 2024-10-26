"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Clock } from "lucide-react";

interface AppointmentListProps {
  date?: Date;
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const appointments = [
  {
    id: "1",
    time: "09:00 AM",
    duration: "1 hour",
    patient: {
      name: "Emma Wilson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80",
      problem: "Tooth cleaning and check-up"
    },
    status: "confirmed"
  },
  {
    id: "2",
    time: "10:30 AM",
    duration: "45 min",
    patient: {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80",
      problem: "Root canal treatment"
    },
    status: "scheduled"
  },
  {
    id: "3",
    time: "02:00 PM",
    duration: "30 min",
    patient: {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&q=80",
      problem: "Follow-up consultation"
    },
    status: "completed"
  }
];

export function AppointmentList({ date, selectedId, onSelect }: AppointmentListProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">
          Appointments for {date ? format(date, 'MMMM d, yyyy') : 'Today'}
        </h3>
        <Button variant="ghost" size="sm">
          View all
        </Button>
      </div>

      <div className="space-y-3">
        {appointments.map((appointment) => (
          <Card
            key={appointment.id}
            className={cn(
              "p-4 cursor-pointer transition-colors",
              selectedId === appointment.id
                ? "border-blue-500 bg-blue-50"
                : "hover:border-gray-400"
            )}
            onClick={() => onSelect(appointment.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <img src={appointment.patient.image} alt={appointment.patient.name} />
                </Avatar>
                <div>
                  <h4 className="font-medium">{appointment.patient.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {appointment.patient.problem}
                  </p>
                </div>
              </div>
              <Button
                variant={
                  appointment.status === "confirmed"
                    ? "default"
                    : appointment.status === "completed"
                    ? "success"
                    : "secondary"
                }
                size="sm"
              >
                {appointment.status}
              </Button>
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {appointment.time}
              </div>
              <div>Duration: {appointment.duration}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}