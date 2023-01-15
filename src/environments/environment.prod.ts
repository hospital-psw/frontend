const integrationApi = 'https://integrationapiserver.azurewebsites.net/api';
const hospitalApi = 'https://hospitalapiserver.azurewebsites.net/api';
export const environment = {
  production: true,
  apiUrl: hospitalApi,
  apiAuthUrl : hospitalApi + "/Auth/login",
  apiAuthBaseUrl : hospitalApi + "/Auth",
  apiFeedbackUrl : hospitalApi + "/Feedback",
  apiNewsUrl : integrationApi + "/News",
  apiTenderUrl : integrationApi + "/Tender",

  apiPatientUrl : hospitalApi + "/ApplicationPatient",
  apiAppointmentUrl: hospitalApi + "/Appointment",
  forgotPasswordUrl: "http://localhost:4200/reset-password",

  apiBloodBankUrl: integrationApi + "/BloodBank",
  apiApplicationDoctor : hospitalApi + "/ApplicationDoctor",
  apiAppointment: hospitalApi + "/Appointment",
  apiEventSourcing: hospitalApi + "/AppointmentSchedulingControler",
  apiStatistics: hospitalApi + "/Statistical/examination/symptom-count"
};
