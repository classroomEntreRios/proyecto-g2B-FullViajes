import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfiladedit',
  templateUrl: './perfiladedit.component.html',
  styleUrls: ['./perfiladedit.component.css']
})
export class PerfiladeditComponent implements OnInit {
  user_id="";
  nickname="";
  mail='';
  ApeNom='';
  descripcion='';
  user_img='';
  user:any;

  constructor(public service: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('user_id')!;
    this.service.acceder(this.user_id).subscribe(
      (usuario: any) => {
        this.user=usuario;
      }
    );
  }

}