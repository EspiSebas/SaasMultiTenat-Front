import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class SaleService {
    private urlSale = "http://localhost:8080/sales";
    

    constructor(private http: HttpClient) {}
    createSale(sale:any){
        return this.http.post<void>(this.urlSale + '/create',sale)
    }

}