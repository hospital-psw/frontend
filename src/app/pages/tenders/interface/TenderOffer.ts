import { TenderItem } from "./TenderItem";

export interface TenderOffer {
    id: number,
    bloodBankName: string,
    offerItem: TenderItem[],
    totalPrice: number
}