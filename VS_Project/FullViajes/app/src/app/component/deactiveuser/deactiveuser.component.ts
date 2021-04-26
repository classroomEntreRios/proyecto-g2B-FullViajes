import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-deactiveuser',
  templateUrl: './deactiveuser.component.html',
  styleUrls: ['./deactiveuser.component.css']
})
export class DeactiveuserComponent implements OnInit {
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
    this.service.deactivate(this.user_id).subscribe(  
    );
    this.router.navigate(['/admusers']);
  }

}
