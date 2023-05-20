import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikiDataService {

  private url = 'http://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&exintro&explaintext&format=json';
  constructor( private http : HttpClient) { }

  public getRandomWikiArticle() : Observable<any>{
    return this.http.get(this.url);
  }
}
