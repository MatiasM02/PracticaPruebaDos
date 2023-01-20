import { Component, OnInit } from '@angular/core';
import { ProductosService } from './../../servicios/productos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  constructor(public api: ProductosService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.api.traerProductos();
  }

}
