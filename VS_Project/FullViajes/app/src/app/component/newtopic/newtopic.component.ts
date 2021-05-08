import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
/*PARA CKEDITOR*/

@Component({
  selector: 'app-newtopic',
  templateUrl: './newtopic.component.html',
  styleUrls: ['./newtopic.component.css']
})
export class NewtopicComponent implements OnInit {
  status='';

  constructor(private router: Router) {
    
    
   }

  ngOnInit(): void {
    this.status = localStorage.getItem('resultado')!;
          if (parseInt(this.status)==0){
        this.router.navigate(['/levelaccessforo']);
      }
  }

 
}
