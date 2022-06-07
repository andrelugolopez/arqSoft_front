import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { AutorizacionService } from '../../services/autorizacion.service';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nueva-contrasena',
  templateUrl: './nueva-contrasena.component.html',
  styleUrls: ['./nueva-contrasena.component.css']
})
export class NuevaContrasenaComponent implements OnInit {


  constructor(
    private client: ClientService,
    public autorizacion: AutorizacionService,
    private route : ActivatedRoute
    
  ) { }

  ngOnInit(): void { 
       };
      
}
  
  
