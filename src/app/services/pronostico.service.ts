import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PronosticoService {
  url = 'http://mariollori.pythonanywhere.com/';
  constructor(private http:HttpClient) { }

  postPronostico(data:any):Observable<any>{
    return  this.http.post<any>(this.url,{data:data});
  }
}
