export interface PredictionBody {
  // SYMPTOMS
  breathing_problems: boolean;
  fever: boolean;
  dry_cough: boolean;
  sore_throat: boolean;
  running_nose: boolean; // ovo se mapira na smell loss
  headache: boolean;
  fatigue: boolean;
  gastrointestinal: boolean; // ovo se mapira na stomachache
  // CHRONIC CONDITIONS
  asthma: boolean;
  heart_disease: boolean; // mapira se na obesity
  chronic_lung_disease: boolean; // lung disease
  diabetes: boolean;
  hyper_tension: boolean;
  family_working_in_public_exposed_places: boolean; // mapira se na kidney disease
  // PUBLIC EXPOSURE
  abroad_travel: boolean;
  contact_with_covid: boolean;
  attended_large_gathering: boolean;
  visited_public_exposed_places: boolean; // public transport,
}
