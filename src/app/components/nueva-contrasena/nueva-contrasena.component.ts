import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { AutorizacionService } from '../../services/autorizacion.service';
import { ActivatedRoute , ParamMap } from '@angular/router';

@Component({
  selector: 'app-nueva-contrasena',
  templateUrl: './nueva-contrasena.component.html',
  styleUrls: ['./nueva-contrasena.component.css']
})
export class NuevaContrasenaComponent implements OnInit {
  tokenEmail: any

  constructor(
    private client: ClientService,
    public autorizacion: AutorizacionService,
    private route : ActivatedRoute
    
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params : ParamMap) => {
      let email = + params.get('email')!;
      this.client.getRequestAllProducts(`http://localhost:5000/tokenContrasena?email=${email}`).subscribe(
        (response: any) => {
          console.log("completo", response)
          //Email
          this.autorizacion.setCourrentEmail(response.email)
          //CodigoR
          this.autorizacion.setCourrentCodigoR(response.CodigoR)

        }),

        (error: any) => 
        {console.log(error);
        };
      
});
  }    
}