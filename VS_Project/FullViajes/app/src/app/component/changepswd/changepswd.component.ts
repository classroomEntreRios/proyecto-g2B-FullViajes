import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-changepswd',
  templateUrl: './changepswd.component.html',
  styleUrls: ['./changepswd.component.css']
})
export class ChangepswdComponent implements OnInit {
  user_id = "";
  status='';
  rol='';
  oldpwd='';
  newpwd='';
  constructor(public service: UsuarioService, private router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.status = localStorage.getItem('resultado')!;
    this.rol = localStorage.getItem('rol')!;
    if (parseInt(this.status)==0){
      this.router.navigate(['/usuario']);
    }
    this.user_id = this._route.snapshot.paramMap.get('user_id')!;
    this.service.changepswd(this.user_id, this.oldpwd, this.newpwd).subscribe(  
    );
    this.router.navigate(['/admusers']);
  
  }

}
