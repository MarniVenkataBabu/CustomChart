import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

   private baseUrl="http://localhost:8080/api/customers";

  constructor(private httpClient:HttpClient) { 
  }

  goToCustomerList():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseUrl}`);
  }

  createCustomer(customer:Customer):Observable<Object>{
     return this.httpClient.post(`${this.baseUrl}`,customer);
  }

  getCustomerId(id:number):Observable<Customer>{
     return this.httpClient.get<Customer>(`${this.baseUrl}/${id}`);
  }

  updateCustomer(id:number,customer:Customer):Observable<Object>{
    return this.httpClient.put<Customer>(`${this.baseUrl}/${id}`,customer);
  }

  deleteCustomer(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}
