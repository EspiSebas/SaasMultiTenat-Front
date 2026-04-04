import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CategoryService {
    private urlCategory = "http://localhost:8080/categories";

    constructor(private http: HttpClient){}

    getCategories(): Observable<any[]>{
        return this.http.get<any[]>(this.urlCategory + '/all')
    }

    createCategory(category:any){
        return this.http.post<void>(this.urlCategory + '/create',category)
    }

    updateCategory(id:number,category:any){
        return this.http.put<void>(this.urlCategory + `/update/${id}`,category)
    }

    deleteCategory(id:number){
        return this.http.delete<void>(this.urlCategory + `/delete/${id}`)
    }


}