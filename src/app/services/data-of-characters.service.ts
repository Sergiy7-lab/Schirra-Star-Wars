import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EMPTY, expand, map, Observable, reduce} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataOfCharactersService {

  url = `https://swapi.dev/api/people/`

  constructor(private http: HttpClient) {
  }

  getAllCharacters(page: number): Observable<any> {
    return this.http.get(this.url+'?page=1').pipe(
      expand((data: any) => data.next == `https://swapi.dev/api/people/?page=${page}` ? this.http.get(data.next) : EMPTY),
      reduce((acc: any[], current: any) => acc.concat(current.results), [])
    );
  }

  scroll(page: number): Observable<any> {
    return this.http.get(this.url+`?page=${page}`).pipe(
      map((data: any) =>  data.results)
    );
  }

  getCharacter(id: number): Observable<any> {
    return this.http.get(this.url+`${id}`).pipe(
      map((char: any) => char)
    )
  }
}
