import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosRespuesta, AuthUserRespuesta } from '../modelos/auth';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private URL_PRODUCTOS: string='https://dummyjson.com/auth/products?skip=0';
  public datos!: AuthUserRespuesta;
  public productos!: ProductosRespuesta;

  constructor(private cliente: HttpClient) { }

  public traerProductos(){
    this.cliente.get<ProductosRespuesta>(this.URL_PRODUCTOS,{
      headers:{
        'Authorization': `Bearer ${this.datos?.token}`,
        'Content-Type': 'application/json'
      }
    }).subscribe(datos =>{
      this.productos = datos;
      console.log(datos)
    })
  }

  public obtenerProductos(){
    return this.productos;
  }
}
