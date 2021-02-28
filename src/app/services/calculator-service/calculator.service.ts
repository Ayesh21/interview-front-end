import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CONFIGURATIONS} from '../../configurations/config';
import {ENDPOINTS} from '../../configurations/endpoint';
import {ICalculatorResponse} from '../../modules/calculator/ICalculatorResponse';
import {Observable} from 'rxjs';
import {ICalculatorRequest} from '../../modules/calculator/ICalculatorRequest';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private http: HttpClient) { }

  public calculateAmount(calculateRequest: ICalculatorRequest[]): Observable<ICalculatorResponse> {
    const url = CONFIGURATIONS.baseUrl +ENDPOINTS.priceCalculate

    return this.http.post<ICalculatorResponse>(url, calculateRequest);
  }
}
