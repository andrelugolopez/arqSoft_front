import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  constructor(private http: HttpClient) { }

  // sendFormToJson(url:any,data:any){
  //   return this.http.post(url, data);
  //  }

   getRequestAllProducts(route: string, into?:string) {

    let config:any = {
      responseType: "json"
    }
    if (into){
      const header = new HttpHeaders().set('Authorization', `Bearer ${into}`);
      config["headers"] = header;
    }
    console.log(config);

    return this.http.get(route, config);
  }


  postRequest(route: string, data?:any, into?:string) {
    let config:any = {
      responseType: "json"
    }

    if (into){
      const header = new HttpHeaders().set('Authorization', `Bearer ${into}`);
      config["header"] = header;
    }

    return this.http.post(route, data, config);
  }
}



























