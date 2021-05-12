import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForoService } from 'src/app/services/foro.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  status='';
  temas:any;
  users:any;
  id='';

  constructor(public service: ForoService, public userservice: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.status = localStorage.getItem('resultado')!;
          if (parseInt(this.status)==0){
        this.router.navigate(['/levelaccessforo']);
      }
      this.service.listar().subscribe(
        (tema: any) => {
          this.temas=tema;
           this.userservice.listar().subscribe(
            (user: any) => {
              this.users=user;
            }
          );
        }
      );
  }

}
