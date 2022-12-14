// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: "http://localhost:16177/api",
  apiAuthUrl : "http://localhost:16177/api/Auth/login",
  apiFeedbackUrl : "http://localhost:16177/api/Feedback",
  apiNewsUrl : "http://localhost:45488/api/News",
  apiBloodBankUrl: "http://localhost:45488/api/BloodBank",
  apiPatientUrl : "http://localhost:16177/api/ApplicationPatient",
  apiApplicationDoctor : "http://localhost:16177/api/ApplicationDoctor",
  apiAppointment: "http://localhost:16177/api/Appointment"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
