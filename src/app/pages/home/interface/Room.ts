import { IFloor } from "./IFloor";
import { IWorkingHours } from "./IWorkingHours";

export interface IRoom {
  id: number;
  number: string;
  floor: IFloor;
  purpose: string;
  workingHours: IWorkingHours;
}
