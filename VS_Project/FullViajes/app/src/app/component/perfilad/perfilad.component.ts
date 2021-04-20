import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfilad',
  templateUrl: './perfilad.component.html',
  styleUrls: ['./perfilad.component.css']
})
export class PerfiladComponent implements OnInit {
  user_id="";
  nickname="";
  mail='';
  ApeNom='';
  descripcion='';
  user_img='';

  constructor(public service: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('user_id')!;
    this.service.acceder(this.user_id).subscribe(
      (usuario: any) => {
        this.nickname=usuario.nickname;
        this.mail=usuario.email;
        this.ApeNom=usuario.nomapel
        this.descripcion=usuario.user_descripcion;
        this.user_img=usuario.user_foto;
      }
    );
  }

}
