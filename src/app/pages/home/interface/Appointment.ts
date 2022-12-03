import { Doctor } from "../../registration/interface/Doctor";
import { Patient } from "../../registration/interface/Patient";
import { IRoom } from "./Room";

export interface Appointment {
  id: number;
  date: Date;
  endDate: Date;
  duration: number;
  examType: number;
  isDone: boolean;
  room: IRoom;
  patient: Patient;
  doctor: Doctor;
}
