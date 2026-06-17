/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BusinessInquiry {
  id: string;
  clientName: string;
  companyName: string;
  email: string;
  phone: string;
  industry: string;
  requiredRoles: string[];
  hoursPerWeek: number;
  message: string;
  status: 'Received' | 'Assessing' | 'Consultation Scheduled';
  createdAt: string;
}

export interface StudentApplication {
  id: string;
  studentName: string;
  email: string;
  phone: string;
  academicGoal: string;
  technicalSkills: string[];
  computerPower: 'Basic Laptop' | 'Standard PC' | 'High Performance';
  preferredCourse: string;
  submittedAt: string;
  status: 'Received' | 'Ready for Interview' | 'Enrolled';
}

export interface ScheduledConsultation {
  id: string;
  clientName: string;
  companyName: string;
  email: string;
  date: string;
  timeSlot: string;
  consultationType: string;
  createdAt: string;
}

export interface ROIResult {
  usAnnualSalary: number;
  ndAnnualCost: number;
  annualSavings: number;
  efficiencyRatio: number;
}
