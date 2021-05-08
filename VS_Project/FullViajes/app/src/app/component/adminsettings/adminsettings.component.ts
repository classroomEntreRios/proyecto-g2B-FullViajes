import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-adminsettings',
  templateUrl: './adminsettings.component.html',
  styleUrls: ['./adminsettings.component.css']
})
export class AdminsettingsComponent implements OnInit {
  user_id="";
  user:any;
  status='';
  rol='';

  constructor(public service: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.status = localStorage.getItem('resultado')!;
    this.rol = localStorage.getItem('rol')!;
    if (parseInt(this.status)==0){
      this.router.navigate(['/usuario']);
    }else{
      if (parseInt(this.rol)==1){
        this.router.navigate(['/levelaccess']);
      }
    }
    this.user_id = localStorage.getItem('user_id')!;
    this.service.acceder(this.user_id).subscribe(
      (usuario: any) => {
        this.user=usuario;
      }
    );
  }

}
