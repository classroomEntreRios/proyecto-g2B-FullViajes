import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user_id="";
  nickname="";
  mail='';
  ApeNom='';
  descripcion='';
  user_img='';
  status='';
  rol='';

  constructor(public service: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('user_id')!;
    this.rol = localStorage.getItem('rol')!;
    if (parseInt(this.rol)==0){
      this.router.navigate(['/perfilad']);
    }
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
