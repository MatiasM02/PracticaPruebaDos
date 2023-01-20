import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { addUser, addUserRespuesta } from '../modelos/auth';

@Injectable({
  providedIn: 'root'
})
export class RegistrarseService {
  private URL_ADD_USER: string='https://dummyjson.com/users/add';
  public datos: addUserRespuesta | null = null;

  constructor(private cliente: HttpClient) { }

  public addUser({firstName, lastName, age, username, password, birthDate, gender}: addUser){
    this.cliente.post<addUserRespuesta>(this.URL_ADD_USER,{
      firstName,
      lastName,
      age,
      username,
      password,
      birthDate,
      gender
    },{
      headers:{
        'Content-Type': 'application/json'
      }
    }).subscribe(datos =>{
      this.datos = datos;
      console.log(datos)
    })
  }
}
