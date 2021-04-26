import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-activeuser',
  templateUrl: './activeuser.component.html',
  styleUrls: ['./activeuser.component.css']
})
export class ActiveuserComponent implements OnInit {
  user_id = "";
  status='';
  rol='';

  constructor(public service: UsuarioService, private router: Router, private _route: ActivatedRoute) { }

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
    this.user_id = this._route.snapshot.paramMap.get('user_id')!;
    this.service.activate(this.user_id).subscribe(  
    );
    this.router.navigate(['/admusers']);
  }

}
