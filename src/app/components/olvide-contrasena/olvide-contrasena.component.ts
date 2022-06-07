import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { AutorizacionService } from '../../services/autorizacion.service';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-olvide-contrasena',
  templateUrl: './olvide-contrasena.component.html',
  styleUrls: ['./olvide-contrasena.component.css']
})
export class OlvideContrasenaComponent implements OnInit {


  constructor(
    private client: ClientService,
    public autorizacion: AutorizacionService
 
    
  ) { }


  ngOnInit(): void {


  }

  addTask(email: HTMLInputElement) {
    console.log('agregando', email.value)
    return false;
  }


}



