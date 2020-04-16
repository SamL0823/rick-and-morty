import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RmapiService{
  
public pageIterator = 1;
public apiUrl = `https://rickandmortyapi.com/api/character/`;
public apiData: any;
dataHold: any;

// private subject = new Subject<any>();

// sendClickEvent() {
//   this.subject.next();
// }
// getClickEvent(): Observable<any>{ 
//   return this.subject.asObservable();
// }

 constructor(public httpclient: HttpClient) { }
 
  getAllData(): Observable<any> {
    // return this.httpclient.get(this.apiUrl)
    // .map((res: Response) => res.json())
    // .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    this.apiData = this.httpclient.get(this.apiUrl);
    return this.apiData;
  }
 
//  the data I needto retrieve is in a nested array and is paginated, so when I call this url
//  I get two objects; info & results. The info object contains a "next" and a "prev" property with
//  a corresponding url.

//  
   
  getNextPage(): Observable<any> {
    if(this.pageIterator === 25){
      this.pageIterator = 1;
      return this.getAllData();
    }
    this.pageIterator = this.pageIterator + 1;
    this.apiData = this.httpclient.get(this.apiUrl + '?page=' + this.pageIterator.toString());
    return this.apiData;
  }
 
  getPrevPage(): Observable<any> {
    if(this.pageIterator === 1){
      this.pageIterator = 25;
      this.apiData = this.httpclient.get(this.apiUrl + '?page=' + '25');   
      return this.apiData;
    }
    this.pageIterator = this.pageIterator - 1;
    this.apiData = this.httpclient.get(this.apiUrl + '?page=' + this.pageIterator.toString());   
    return this.apiData;
  }

  getCharacter(input): Observable<any> {
    this.apiData = this.httpclient.get(this.apiUrl + '?name=' + input);
    return this.apiData;
  }
  
}
