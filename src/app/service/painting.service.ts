import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Painting } from '../model/painting';

@Injectable({
  providedIn: 'root',
})
export class PaintingService {
  firebaseUrl: string = environment.apiUrl;
  entityName: string = 'paintings.json';

  constructor(private http: HttpClient) {}

  fetchPaintings() {
    return this.http
      .get<{ [key: string]: Painting }>(`${this.firebaseUrl}${this.entityName}`)
      .pipe(
        map((responseData) => {
          const paintingsArray: Painting[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              paintingsArray.push({ ...responseData[key], uniqueId: key });
            }
          }
          return paintingsArray;
        })
      );
  }
}
