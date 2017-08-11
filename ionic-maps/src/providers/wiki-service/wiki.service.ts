import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { Wiki } from '../../models/wiki.interface'

@Injectable()
export class WikiServiceProvider {

  private baseUrl: string = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
  private queryString: string ="&limit=1&format=json&callback=?";
  private headers = new Headers();
  private options = new RequestOptions({headers: this.headers})

  constructor(public http: Http) {
    console.log('Hello WikiServiceProvider Provider');
  }

  getWiki(wikiTopic: string): Observable <Wiki> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('origin', '*');
    this.options.search = params;
    
    console.log('Yo, the get was called!')
  //  https://en.wikipedia.org/w/api.php?action=opensearch&search=pizza&limit=1&format=json
  //  https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Stack%20Overflow
    // `${this.baseUrl}${wikiTopic}${this.queryString}`
    return this.http.get(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${wikiTopic}&limit=1&format=json`, this.options)
      .do((data: Response) => console.log(data))
      .map((data: Response) => data.json())
      .do((data: Response) => console.log(data))
      .catch((error: Response) => Observable.throw(error.json().error || "Server error."))
  }

}
