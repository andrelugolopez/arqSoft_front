import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../../services/autorizacion.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public autorizacion: AutorizacionService) { }

  ngOnInit(): void {
  }

}
