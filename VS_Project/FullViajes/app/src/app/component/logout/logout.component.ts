import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  token='';

  constructor(public service: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')!;
    this.chaUser(this.token);
  }
  
  chaUser(token:string){
    this.service.chau(token).subscribe(
      (res: any) => {
        if (res.resultado == 0) {
          localStorage.clear();
          localStorage.setItem('resultado', res.resultado);
          this.router.navigate(['/principal']);
        }
      }
    );
  }
}
