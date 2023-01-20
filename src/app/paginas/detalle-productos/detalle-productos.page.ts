import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.page.html',
  styleUrls: ['./detalle-productos.page.scss'],
})
export class DetalleProductosPage implements OnInit {
  public title: string='';
  public price: number=0;
  public descuento: number=0;
  public rating: number=0;
  public stock: number=0;
  public brand: string='';
  public category: string='';
  public description: string='';
  public images!: string[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(parametros =>{
      this.title = parametros['title'];
      this.price = parametros['price'];
      this.descuento = parametros['descuento'];
      this.rating = parametros['rating'];
      this.stock = parametros['stock'];
      this.brand = parametros['brand'];
      this.category = parametros['category'];
      this.description = parametros['description'];
      this.images = parametros['images'];

    })
  }

}
