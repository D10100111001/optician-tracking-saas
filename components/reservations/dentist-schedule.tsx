"use client";

import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface DentistScheduleProps {
  className?: string;
}

const dentists = [
  {
    name: "Dr. Sarah Smith",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&q=80",
    status: "available",
    appointments: 5
  },
  {
    name: "Dr. Michael Johnson",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&q=80",
    status: "busy",
    appointments: 8
  },
  {
    name: "Dr. Emily Williams",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&h=100&q=80",
    status: "available",
    appointments: 3
  }
];

export function DentistSchedule({ className }: DentistScheduleProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="font-semibold">Dentists Available</h3>
      <div className="space-y-3">
        {dentists.map((dentist) => (
          <div
            key={dentist.name}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <img src={dentist.image} alt={dentist.name} />
              </Avatar>
              <div>
                <p className="text-sm font-medium">{dentist.name}</p>
                <p className="text-xs text-muted-foreground">
                  {dentist.appointments} appointments today
                </p>
              </div>
            </div>
            <Badge
              variant={dentist.status === "available" ? "success" : "secondary"}
            >
              {dentist.status}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}