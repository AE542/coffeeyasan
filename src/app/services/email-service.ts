import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class EmailService {
    private emailUrl = 'http://localhost:3500/send-email';
    //above needs replacing with backend URL

    constructor(private http: HttpClient) { }

    sendEmail(name: string, email: string, body: string) {
        const data = {
            name: name,
            email: email,
            body: body
        };
        return this.http.post(this.emailUrl, data);
    }
}