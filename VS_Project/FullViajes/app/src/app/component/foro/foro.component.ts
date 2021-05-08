import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {
  status='';
  estado=false;
  constructor() { }

  ngOnInit(): void {
    this.status = localStorage.getItem('resultado')!;
    if (parseInt(this.status)==1){
      this.estado=true;
    }
  }

}
