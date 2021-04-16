import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  user_id="";
  user:any;
  constructor(public service: UsuarioService, private router: Router, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.user_id = this._route.snapshot.paramMap.get('user_id')!;
    this.service.acceder(this.user_id).subscribe(
      (usuario: any) => {
        this.user=usuario;
      }
    );
  }

}
