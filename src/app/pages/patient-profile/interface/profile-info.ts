import { AppPatient } from "./app-patient";

export interface ProfileInfo {
    applicationPatient: AppPatient;
    choosenDoctor: string;
    allergies: string[];
    birthDate: Date;
    gender: number;
}
