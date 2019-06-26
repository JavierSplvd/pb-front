import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Course } from '../models/course.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CourseService {

  constructor(private http:HttpClient) {}

  //'http://localhost:8080/user-portal/user';
	private courseUrl = '/api/course';

  public getCourses() {
    return this.http.get<Course[]>(this.courseUrl);
  }

  public getLevels() {
    return this.http.get<[]>(this.courseUrl + '/levels');
  }

  public deleteCourse(course) {
    return this.http.delete(this.courseUrl + "/"+ course.id);
  }

  public createCourse(course) {
    return this.http.post<Course>(this.courseUrl, course);
  }

}
