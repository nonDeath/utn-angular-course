import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  catalogUrl: string = `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent('pioneer dj')}`;
  itemUrl: string = 'https://api.mercadolibre.com/items';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(this.catalogUrl);
  }

  find(productId: string): Promise<any> {
    return lastValueFrom(this.http.get<any>(`${this.itemUrl}/${productId}`));
  }

  getDescription(productId:string): Promise<any> {
    return lastValueFrom(this.http.get(`https://api.mercadolibre.com/items/${productId}/description`));
  }
}
