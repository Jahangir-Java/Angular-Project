import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { EmployeeModel } from '../employee-dashboard/employee-dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  updateEmployee(employeeModelobj: EmployeeModel, id: number) {
    throw new Error('Method not implemented.');
  }
  _url:string="http://localhost:3000/users";

  constructor(private _http:HttpClient) { }
  // postEmployee(data: any){
  //   return this.http.post<any>("http:localhost:3000/posts",data)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
  // getEmployee(data: any){
  //   return this.http.get<any>("http:localhost:3000/posts")
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
  // updateEmployee(data: any, id: number){
  //   return this.http.put<any>("http:localhost:3000/posts"+id,data)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
  // deleteEmployee(id: number){
  //   return this.http.delete<any>("http:localhost:3000/posts"+id)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
  showData(){
    return this._http.get<any>(this._url);
  }
  save(users:any){
    return this._http.post<any>(this._url,users);
  }
  update(users:any,id:number){
   return this._http.put<any>(this._url+"/"+id,users);
  }
  delete(users:any){
    return this._http.delete<any>(this._url+"/"+users);
  }
}
