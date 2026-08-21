import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginDto {
    username: string;
    password: string;
}

export interface LoginResponse {
    access_token: string;
}

export interface RegisterDto {
    username: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:3000/auth';

    constructor(private http: HttpClient) {}

    login(dto: LoginDto): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${this.apiUrl}/login`, dto);
    }

    register(dto: RegisterDto): Observable<any> {
        return this.http.post(`${this.apiUrl}/register`, dto);
    }

    // Salva il token nel localStorage
    saveToken(token: string): void {
        localStorage.setItem('access_token', token);
    }

    // Recupera il token
    getToken(): string | null {
        return localStorage.getItem('access_token');
    }

    // Controlla se l'utente è loggato
    isLoggedIn(): boolean {
        return !!this.getToken();
    }

    // Logout
    logout(): void {
        localStorage.removeItem('access_token');
    }
}