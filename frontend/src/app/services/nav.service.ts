import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { NavItem, NavResponse } from "../model/nav.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class NavService {
    private apiUrl = 'http://localhost:3000/nav'

    constructor(private http: HttpClient){}

    getMenu(): Observable<NavResponse> {
        return this.http.get<NavResponse>(this.apiUrl)
    }

    getByType(type: string): Observable<NavItem[]> {
    return this.http.get<NavItem[]>(`${this.apiUrl}?menuType=${type}`);
  }
}