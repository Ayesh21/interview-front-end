import { Injectable } from '@angular/core';
import {ENDPOINTS} from '../../configurations/endpoint';
import {CONFIGURATIONS} from '../../configurations/config';
import {IProduct} from '../../modules/product/IProduct';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllPenguinEars(): Observable<any> {
    const url = CONFIGURATIONS.baseUrl +ENDPOINTS.penguinears
    return this.http.get(url);
  }

  getAllHorseShoes(): Observable<any> {
    const url = CONFIGURATIONS.baseUrl +ENDPOINTS.horseshoes
    return this.http.get(url);
  }
}
