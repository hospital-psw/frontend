import { TenderItem } from "./TenderItem";

export interface Tender{
    id: number,
    dueDate: Date,
    items: TenderItem[],
}