import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  productList:Product[]=[]
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productListMethod();
  }
  productListMethod(){
    try{
        this.productService.getProduct()
        .subscribe(item => this.productList=item)
    }catch(error){
      console.log(error)
    }
  }
}
