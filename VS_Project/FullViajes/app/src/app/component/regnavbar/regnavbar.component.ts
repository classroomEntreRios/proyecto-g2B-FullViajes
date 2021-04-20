import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regnavbar',
  templateUrl: './regnavbar.component.html',
  styleUrls: ['./regnavbar.component.css']
})
export class RegnavbarComponent implements OnInit {
  Username = '';
  imgperfil='';


  constructor() { }

  ngOnInit(): void {
      this.Username = localStorage.getItem('nickname')!;
      this.imgperfil = localStorage.getItem('imgperfil')!;
  }

}
