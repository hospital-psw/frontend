export interface Patient {
     applicationUserDTO: {
          firstName: string;
          lastName:string; 
          email : string;
          dateOfBirth : string;
          male : boolean;
          password : string;
          confirmPassword : string;
     },
    
     bloodType : number;
     choosenDoctor : number;
     allergies : number[];

}