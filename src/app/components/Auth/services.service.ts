import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Services {
  baseUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  isLoggedIn() {
    return !!localStorage.getItem('UserName')
  }
  logout() {
    localStorage.removeItem('UserName');

  }

  getEmployeeById(id: any) {
    return this.http.get<any>(this.baseUrl + '/Employees/' + id)
  }
  getEmployees() {
    return this.http.get<any>(this.baseUrl + '/Employees')
  }
  addEmployee(data: any) {
    return this.http.post<any>(this.baseUrl + '/Employees', data)
  }
  editEmployee(data: any) {
    return this.http.put<any>(this.baseUrl + '/Employees/' + data.id, data)
  }
  deleteEmployee(id: any) {
    return this.http.delete(this.baseUrl + '/Employees/' + id)
  }

  getUsers() {
    return this.http.get<any>(this.baseUrl + '/users')
  }
  addUsers(data: any) {
    return this.http.post<any>(this.baseUrl + '/users', data)
  }
}
