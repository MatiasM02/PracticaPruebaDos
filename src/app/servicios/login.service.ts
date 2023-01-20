import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthUser, AuthUserRespuesta } from '../modelos/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private URL_LOGIN: string='https://dummyjson.com/auth/login';
  public datos: AuthUserRespuesta | null = null;

  constructor(private cliente: HttpClient) { }

  public autenticar({username, password}: AuthUser){
    this.cliente.post<AuthUserRespuesta>(this.URL_LOGIN,{
      username,
      password
    },{
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(datos =>{
      this.datos = datos;
      console.log(datos)
    })
  }
}
