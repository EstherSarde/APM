import { IProduct } from "./product";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ProducService{

  private Url = "api/products/products.json";
  constructor(private http: HttpClient){

  }

  getProdutos(): Observable<IProduct[]> {
      return this.http.get<IProduct[]>(this.Url)    
  }
}