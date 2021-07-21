import { Injectable } from '@angular/core';

import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "http://localhost/project/my-app/php/";

	constructor(private httpClient: HttpClient) {}
  create(user: User): Observable<User>{
		return this.httpClient.post<User>(`${this.PHP_API_SERVER}/create.php`, user);
	}
  readProducts(): Observable<User[]>{
		return this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/read.php`);
	}
	deleteProduct(id: number){
		return this.httpClient.delete<User>(`${this.PHP_API_SERVER}/delete.php/?id=${id}`);
	}
}
