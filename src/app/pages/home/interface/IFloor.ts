import { IBuilding } from "./IBuilding";

export interface IFloor {
  id: number;
  number: number;
  purpose: string;
  building: IBuilding;
}
