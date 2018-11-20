import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IDados } from './dados'


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private Url = "https://api.github.com/users/esthersarde"

  constructor(private http: HttpClient) { }

  getMeusDados(): Observable<IDados>{
    return this.http.get<IDados>(this.Url)
  }

}
