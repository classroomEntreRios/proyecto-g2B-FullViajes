import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  status='';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.status = localStorage.getItem('resultado')!;
          if (parseInt(this.status)==0){
        this.router.navigate(['/levelaccessforo']);
      }
  }

}
