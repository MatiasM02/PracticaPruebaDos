import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoginService } from './../../servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup

  constructor(private api: LoginService, private fb: FormBuilder, private router: Router, private alertCtrl: AlertController) {
    this.formularioLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  public ingresar(){
    this.api.autenticar({
      username: this.formularioLogin.value.username,
      password: this.formularioLogin.value.password
    })
  }

  async AlertaSesion(){
    const alert = await this.alertCtrl.create({
      header: 'Inicio de Sesion',
      message: 'Inicio de sesion Correctamente',
      buttons: ['Ok']
    });
    await alert.present();
  }
}
