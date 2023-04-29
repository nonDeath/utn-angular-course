import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  product: any;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CatalogService
  ) {}

    ngOnInit(): void {
      const find = async (id:string) => {
        try {
          this.product = await this.service.find(id);
          this.product.description = await this.service.getDescription(id);
        } catch (error) {
          console.log(error)
        }
        this.loading = false;
      };

      const id = this.route.snapshot.paramMap.get('product_id');

      if (id) {
        find(id);
      }
    }
}
