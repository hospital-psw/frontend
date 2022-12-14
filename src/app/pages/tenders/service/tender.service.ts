import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tender } from '../interface/Tender';
import { TenderItem } from '../interface/TenderItem';

@Injectable({
  providedIn: 'root'
})
export class TenderService {
  apiString: string = 'http://localhost:45488/api/Tender';
  constructor(private http: HttpClient) {}

  getActiveTenders() : Observable<Tender[]> {
    return this.http.get<Tender[]>(`${this.apiString}/active`);
  }

  getTender(id: number) : Observable<Tender> {
    return this.http.get<Tender>(`${this.apiString}/${id}`);
  }

  makeAnOffer(items: TenderItem[], tenderId: number) {
    return this.http.put<TenderItem[]>(`${this.apiString}/MakeAnOffer/${tenderId}`, items);
  }
}
