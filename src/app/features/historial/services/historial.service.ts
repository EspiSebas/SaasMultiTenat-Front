import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
    providedIn:'root'
})

export class HistorialService {
    private urlHistorial = "http://localhost:8080/sales"

    constructor(private http:HttpClient) {}

    getAllSales():Observable<any[]>{
        return this.http.get<any[]>(this.urlHistorial+"/all")
    }
}