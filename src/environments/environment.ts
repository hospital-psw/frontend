// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const integrationApi = 'https://integrationapiserver.azurewebsites.net/api';
const hospitalApi = 'https://hospitalapiserver.azurewebsites.net/api';
export const environment = {
  production: false,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
