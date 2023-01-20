import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrarseService } from './../../servicios/registrarse.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
  formularioRegistro: FormGroup;

  constructor(private api: RegistrarseService, private fb: FormBuilder) {
    this.formularioRegistro = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  public registrarse(){
    this.api.addUser({
      firstName: this.formularioRegistro.value.firstName,
      lastName: this.formularioRegistro.value.lastName,
      age: this.formularioRegistro.value.age,
      username: this.formularioRegistro.value.username,
      password: this.formularioRegistro.value.password,
      birthDate: this.formularioRegistro.value.birthDate,
      gender: this.formularioRegistro.value.gender
    })
  }

}
