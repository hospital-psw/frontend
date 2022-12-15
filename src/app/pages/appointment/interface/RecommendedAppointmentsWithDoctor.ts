import { RecommendedAppointmets } from "./RecommendedAppointmets";

export interface RecommendedAppointmentsWithDoctor {
 recommendedAppointmentDto : RecommendedAppointmets;
 applicationDoctorName: string;
 applicationDoctorSurname: string;
 applicationDoctorId: number;

}