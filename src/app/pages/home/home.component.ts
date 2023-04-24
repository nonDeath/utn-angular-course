import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [CatalogService],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any;

  constructor(private catalog: CatalogService) {}

  ngOnInit(): void {
    this.getCatalog();
  }

  getCatalog() {
    this.catalog.get()
      .subscribe({
        next: (response:any) => {
          this.products = response.results
        },
        error: (e) => {
          console.log(e)
        }
      });
  }
}
