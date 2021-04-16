import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  status='';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.status = localStorage.getItem('resultado')!;
    console.log(this.status);
    if (parseInt(this.status)==1){
      this.router.navigate(['/principal2']);
    }
  }

}
