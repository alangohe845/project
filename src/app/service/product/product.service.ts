import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //Url que se conectara al backend
  url="http://localhost:5000/api/product"

  constructor(private http:HttpClient) { 

  }
  getProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.url)
  }
  addProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(this.url,{product})
  }
  deleteProduct(id:string):Observable<Product>{
    return this.http.delete<Product>(this.url+"/"+id)
  }
}
