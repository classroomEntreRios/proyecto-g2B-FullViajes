import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
