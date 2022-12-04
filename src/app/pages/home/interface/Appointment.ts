import { AppointmentDoctor } from "./AppointmentDoctor";
import { AppointmentPatient } from "./AppointmentPatient";
import { IRoom } from "./Room";

export interface Appointment {
  id: number;
  date: Date;
  endDate: Date;
  duration: number;
  examType: number;
  isDone: boolean;
  room: IRoom;
  patient: AppointmentPatient;
  doctor: AppointmentDoctor;
}
