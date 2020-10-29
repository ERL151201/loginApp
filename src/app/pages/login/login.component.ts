import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../serices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService) { }
  
  usuario: UsuarioModel = new UsuarioModel();


  ngOnInit() {
  }

  login(form: NgForm){

    if( form.invalid){return;}
    
    this.auth.login(this.usuario)
    .subscribe( resp =>{

      console.log(resp);
      

    }, (err) =>{
        
      console.log(err.error.error.message);
      


    });
    
  }

}
