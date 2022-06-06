import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { AutorizacionService } from '../../services/autorizacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-olvide-contrasena',
  templateUrl: './olvide-contrasena.component.html',
  styleUrls: ['./olvide-contrasena.component.css']
})
export class OlvideContrasenaComponent implements OnInit {
  emailToken:any;
  
  constructor(
    private client: ClientService,
    public autorizacion: AutorizacionService,
    private route: Router
  ) { }


  ngOnInit(): void {
    // this.recibirToken();
  }

  // recibirToken(){
  //   this.client.getRequestAllProducts('http://localhost:5000/tokenContrasena?email='+this.emailToken).subscribe(
  //     (response:any)=>{
  //       console.log(response),
  //       //Email
  //       this.autorizacion.setCourrentEmail(response.emailToken)
  //       //CodigoR
  //       this.autorizacion.setCourrentCodigoR(response.CodigoR)
 

  //   }),

    // (error:any)=> {
    //   console.log(error);
    // };
}
