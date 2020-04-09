import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from 'src/app/character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RmapiService {

  public allCharacters: any = [];


 constructor(public httpclient: HttpClient) { }

  // getAllCharacters() {   
  //   return this.http.get(
  //     `https://rickandmortyapi.com/api/character/`,      
  //   );
  // }

  getAllData(): Observable<any> {
    return this.httpclient.get('https://rickandmortyapi.com/api/character/')
  }


  
}
