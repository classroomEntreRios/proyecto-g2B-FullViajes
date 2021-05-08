import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-levelaccess',
  templateUrl: './levelaccess.component.html',
  styleUrls: ['./levelaccess.component.css']
})
export class LevelaccessComponent implements OnInit {
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
