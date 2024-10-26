"use client";

import { CheckCircle2, Clock } from 'lucide-react';

const records = [
  {
    date: { month: 'MEI', day: '03' },
    condition: 'Caries',
    treatment: 'Tooth filling',
    dentist: 'Drg Soap Mactavish',
    notes: 'Advanced Decay',
    status: 'done'
  },
  {
    date: { month: 'APR', day: '12' },
    condition: 'Caries',
    treatment: 'Tooth filling',
    dentist: 'Drg Soap Mactavish',
    notes: 'Decay in pulp',
    status: 'pending',
    reason: 'Not enough time'
  }
];

export function MedicalRecordTimeline() {
  return (
    <div className="space-y-6">
      {records.map((record, index) => (
        <div key={index} className="relative pl-6 pb-6">
          {index !== records.length - 1 && (
            <div className="absolute left-2.5 top-6 h-full w-px bg-gray-200" />
          )}
          
          <div className="absolute left-0 top-1">
            {record.status === 'done' ? (
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            ) : (
              <Clock className="h-5 w-5 text-yellow-500" />
            )}
          </div>

          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm text-gray-500">{record.date.month}</div>
              <div className="text-2xl font-semibold">{record.date.day}</div>
            </div>

            <div className="flex-1 ml-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-sm text-gray-500">CONDITION</div>
                  <div className="font-medium">{record.condition}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">TREATMENT</div>
                  <div className="font-medium">{record.treatment}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">DENTIST</div>
                  <div className="font-medium">{record.dentist}</div>
                </div>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <FileText className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{record.notes}</span>
              </div>

              {record.reason && (
                <div className="mt-2 text-sm text-red-500">
                  Reason: {record.reason}
                </div>
              )}
            </div>

            <div className="ml-4">
              {record.status === 'done' ? (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Done
                </span>
              ) : (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Pending
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}