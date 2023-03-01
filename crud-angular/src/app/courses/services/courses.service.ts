import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../courses/model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  list(): Course[] {
    return [
      { _id: '1', name: 'Angular', category: 'front-end' }
    ];
  }
}
