import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tender } from '../interface/Tender';
import { TenderItem } from '../interface/TenderItem';

@Injectable({
  providedIn: 'root'
})
export class TenderService {
  apiString: string = 'http://localhost:45488/api/Tender';
  constructor(private http: HttpClient) {}

  getActiveTenders() : Observable<Tender[]> {
    return this.http.get<Tender[]>(`${environment.apiTenderUrl}/active`);
  }

  getTender(id: number) : Observable<Tender> {
    return this.http.get<Tender>(`${environment.apiTenderUrl}/${id}`);
  }

  makeAnOffer(items: TenderItem[], tenderId: number) {
    return this.http.put<TenderItem[]>(`${environment.apiTenderUrl}/MakeAnOffer/${tenderId}`, items);
  }
}
