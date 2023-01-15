// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:16177/api',
  apiAuthUrl: 'http://localhost:16177/api/Auth/login',
  apiAuthBaseUrl: 'http://localhost:16177/api/Auth',
  apiFeedbackUrl: 'http://localhost:16177/api/Feedback',
  apiNewsUrl: 'http://localhost:45488/api/News',

  apiPatientUrl: 'http://localhost:16177/api/ApplicationPatient',
  apiAppointmentUrl: 'http://localhost:16177/api/Appointment',
  forgotPasswordUrl: 'http://localhost:4200/reset-password',

  apiBloodBankUrl: 'http://localhost:45488/api/BloodBank',
  apiApplicationDoctor: 'http://localhost:16177/api/ApplicationDoctor',
  apiAppointment: 'http://localhost:16177/api/Appointment',
  apiEventSourcing: 'http://localhost:16177/api/AppointmentSchedulingControler',
  apiCovidPrediction:
    'https://careconnectcovidprediction.azurewebsites.net/model',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
