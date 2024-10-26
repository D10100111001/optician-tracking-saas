"use client";

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card } from '@/components/ui/card';
import { ReservationHeader } from '@/components/reservations/header';
import { AppointmentList } from '@/components/reservations/appointment-list';
import { AppointmentDetails } from '@/components/reservations/appointment-details';
import { DentistSchedule } from '@/components/reservations/dentist-schedule';

export default function ReservationsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedAppointment, setSelectedAppointment] = useState<string | null>(null);

  return (
    <div className="flex-1 p-8 pt-6">
      <ReservationHeader />
      
      <div className="grid grid-cols-12 gap-6 mt-6">
        <Card className="col-span-3 p-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
          <DentistSchedule className="mt-6" />
        </Card>

        <div className="col-span-5">
          <AppointmentList
            date={date}
            selectedId={selectedAppointment}
            onSelect={setSelectedAppointment}
          />
        </div>

        <Card className="col-span-4 p-6">
          <AppointmentDetails
            appointmentId={selectedAppointment}
            onClose={() => setSelectedAppointment(null)}
          />
        </Card>
      </div>
    </div>
  );
}