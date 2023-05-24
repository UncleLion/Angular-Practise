import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { Observable, tap } from 'rxjs';
import { ProductService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  implements OnInit{
  title = 'my-app';
  products: IProduct[] = []
  loading: boolean = false
  products$: Observable<IProduct[]>
  term = ''

  constructor(private productsService: ProductService) {
  }



  ngOnInit(): void {
    this.loading  = true
    this.products$ = this.productsService.getAll().pipe(
      tap( () => this.loading = false)
      )
    // this.productsService.getAll().subscribe(products => {
    //   this.products = products
    //   this.loading = false
    // })
  }
    
  }
