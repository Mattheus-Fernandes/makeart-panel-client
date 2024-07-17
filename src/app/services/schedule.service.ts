import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private apiUrl:string = "https://makeartservice.com.br/api/schedule"

  constructor(private http: HttpClient) { }

  getAllSchedules():Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }

  registerSchedule(data: any):Observable<any> {
    return this.http.post<any>(this.apiUrl, data)
  }

  deleteSchedule(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
