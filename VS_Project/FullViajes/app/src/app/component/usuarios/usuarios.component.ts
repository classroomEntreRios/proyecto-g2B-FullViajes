import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  user_id="";
  nickname="";
  mail='';
  rol=''
  ApeNom='';
  descripcion='';
  users:any;

  constructor(public service: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.service.listar().subscribe(
      (usuario: any) => {
        this.users=usuario;
      }
    );
  }

}
