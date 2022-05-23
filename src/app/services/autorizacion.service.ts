import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {
  isLogin = new BehaviorSubject<boolean>(this.checkToken());

  //admin = new BehaviorSubject<boolean>(null);

  private checkToken() : boolean {
    return !!localStorage.getItem('into');
  }

  login(into:string) : void {

    localStorage.setItem('into', into);
    // this.admin.next(true);
    this.isLogin.next(true);

  }

    //método que nos permite establecer el nombre del usuario

  setCourrentUser(user:string) : void {
    localStorage.setItem('courrentUser', user);
  }

  setCourrentRol(rol:string) : void {
    localStorage.setItem('courrentRol', rol);
  }

  setCourrentDoc(doc:string) : void {
    localStorage.setItem('courrentDoc', doc);
  }
  
    //método que nos permite recuperar el nombre del usuario
  getCourrentUser() {
    return localStorage.getItem('courrentUser');
  }

  getCourrentRol() {
    return localStorage.getItem('courrentRol');
  }

  getCourrentDoc() {
    return localStorage.getItem('courrentDoc');
  }
  
    //método que nos permite eliminar el nombre de usuario
  private deleteCourrentUser() : void {
    localStorage.removeItem('courrentUser');
  }

  private deleteCourrentRol() : void {
    localStorage.removeItem('courrentRol');
  }

  private deleteCourrentDoc() : void {
    localStorage.removeItem('courrentDoc');
  }

  getToken() {
    if (this.checkToken()){
      return localStorage.getItem('into')
    }
    return "No hay token";
  }
  
  
    //método que nos permite romover el token almacenado y el nombre del
    //usuario actual y enviar una señal al BehaviorSubject para establecer
    //su nuevo valor, en este caso false para indicar que no estamos logueados
  logout() : void {
    localStorage.removeItem('into');
    this.deleteCourrentUser();
    this.deleteCourrentRol();
    this.deleteCourrentDoc();
    this.isLogin.next(false);
  }
  
    //método que nos retorna el BehaviorSubject cómo un observable
  isLoggedIn() : Observable<boolean> {
    return this.isLogin.asObservable();
    }
  
     /*
     isUser() : Observable<boolean> {
      return this.user.asObservable();
     }
  */
  
     //método que nos retorna el BehaviorSubject admin cómo un observable
    // isAdmin() : Observable<boolean> {
    //   return this.admin.asObservable();
    //  }

  // constructor() { }
}
