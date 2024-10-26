"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Edit, MoreVertical, FileText } from 'lucide-react';
import { OdontogramChart } from '@/components/odontogram-chart';
import { MedicalRecordTimeline } from '@/components/medical-record-timeline';

export default function PatientDetail() {
  const [activeTab, setActiveTab] = useState('medical');

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&q=80"
            alt="Willie Jennie"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <h1 className="text-2xl font-semibold">Willie Jennie</h1>
            <div className="flex items-center gap-2 mt-1">
              <FileText className="h-4 w-4 text-gray-500" />
              <span className="text-gray-600">Have uneven jawline</span>
              <Button variant="link" className="text-blue-600 p-0 h-auto">
                Edit
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
          <Button>Create Appointment</Button>
        </div>
      </div>

      <Tabs defaultValue="medical-record" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="patient-info">Patient Information</TabsTrigger>
          <TabsTrigger value="appointment-history">
            Appointment History
          </TabsTrigger>
          <TabsTrigger value="next-treatment">Next Treatment</TabsTrigger>
          <TabsTrigger value="medical-record">Medical Record</TabsTrigger>
        </TabsList>

        <TabsContent value="medical-record">
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Service</h2>
                <div className="flex gap-2">
                  <Button
                    variant={activeTab === 'medical' ? 'default' : 'outline'}
                    onClick={() => setActiveTab('medical')}
                    size="sm"
                  >
                    Medical
                  </Button>
                  <Button
                    variant={activeTab === 'cosmetic' ? 'default' : 'outline'}
                    onClick={() => setActiveTab('cosmetic')}
                    size="sm"
                  >
                    Cosmetic
                  </Button>
                </div>
              </div>
              <OdontogramChart />
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-6">
                Maxillary Left Lateral Incisor
              </h2>
              <MedicalRecordTimeline />
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}