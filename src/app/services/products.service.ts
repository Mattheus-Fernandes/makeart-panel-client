import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  private apiUrl:string = "https://makeartservice.com.br/api/product"

  constructor(private http: HttpClient) { }

  registerProduct(data: any):Observable<any>{
    return this.http.post<any>(this.apiUrl, data)
  }

  getData():Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }

  getProduct(id: any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${id}`)
  }

  editProduct(id: any, data:any):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/${id}`, data)
  }

  deleteProduct(id: any):Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`)
  }

  getLastestRegistrations():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/update`)
  }
}
