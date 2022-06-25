import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  date = new Date().toLocaleString().split(',')
  fecha = this.date[0].replace(/\//g, "-")
  hora = this.date[1]

  constructor() 
  
  
  { 
    setInterval(() => {
      this.hora = new Date().toLocaleString().split(',')[1]
    }, 1)
  }

  ngOnInit(): void {
  }

}
