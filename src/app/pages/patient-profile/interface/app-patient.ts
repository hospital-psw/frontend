import { LoggedUser } from "./logged-user";

export interface AppPatient {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    hospitalized: boolean;
    bloodType: number;
}
