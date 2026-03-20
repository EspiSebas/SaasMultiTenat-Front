import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    private urlProduct = "http://localhost:8080/products";

    constructor(private http: HttpClient) {}

    getProduct(): Observable<any[]>{
        return this.http.get<any[]>(this.urlProduct+"/all")
    }

    createProduct(product:any){
        return this.http.post<void>(this.urlProduct + '/create',product)
    }

    updateProduct(id:number,product:any){
        return this.http.put<void>(this.urlProduct + `/update/${id}` , product)
    }

    deleteProduct(id:number){
        return this.http.delete<void>(this.urlProduct + `/delete/${id}`)
    }
}