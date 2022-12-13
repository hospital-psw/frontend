import { Specialization } from "./Specialization";

export interface AppointmentDoctor{
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    role: string,
    specialization: Specialization
}