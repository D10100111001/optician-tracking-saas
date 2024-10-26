"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const recentPatients = [
  {
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    treatment: "Dental Cleaning",
    date: "2024-01-15",
    status: "Completed",
  },
  {
    name: "Michael Chen",
    email: "m.chen@example.com",
    treatment: "Root Canal",
    date: "2024-01-14",
    status: "In Progress",
  },
  {
    name: "Emma Wilson",
    email: "emma.w@example.com",
    treatment: "Orthodontics",
    date: "2024-01-14",
    status: "Scheduled",
  },
  {
    name: "James Brown",
    email: "j.brown@example.com",
    treatment: "Tooth Extraction",
    date: "2024-01-13",
    status: "Completed",
  },
];

export function RecentPatients() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Patient</TableHead>
          <TableHead>Treatment</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentPatients.map((patient) => (
          <TableRow key={patient.email}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-3">
                <Avatar />
                <div>
                  <p className="font-medium">{patient.name}</p>
                  <p className="text-sm text-muted-foreground">{patient.email}</p>
                </div>
              </div>
            </TableCell>
            <TableCell>{patient.treatment}</TableCell>
            <TableCell>
              <Button
                variant={
                  patient.status === "Completed"
                    ? "success"
                    : patient.status === "In Progress"
                    ? "default"
                    : "secondary"
                }
                size="sm"
              >
                {patient.status}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}