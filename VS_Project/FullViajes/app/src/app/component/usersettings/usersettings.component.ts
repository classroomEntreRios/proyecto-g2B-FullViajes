import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usersettings',
  templateUrl: './usersettings.component.html',
  styleUrls: ['./usersettings.component.css']
})
export class UsersettingsComponent implements OnInit {
  user_id="";
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

