import { BloodType } from "../enum/BloodType";
import { Money } from "./Money";

export interface TenderItem{
    bloodType: BloodType,
    money: Money,
    quantity: number,
}