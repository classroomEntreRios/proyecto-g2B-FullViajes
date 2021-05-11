import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-verifica',
  templateUrl: './verifica.component.html',
  styleUrls: ['./verifica.component.css']
})
export class VerificaComponent implements OnInit {
  tkn='';
  id='';

  constructor(public service: UsuarioService, private router: Router, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    //this.id = this._route.snapshot.paramMap.get('id')!;
    this.tkn = this._route.snapshot.paramMap.get('tkn')!;
    this.service.verifica(this.tkn).subscribe();
    this.router.navigate(['/verificaok']);
  }

}
