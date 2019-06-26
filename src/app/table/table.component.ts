import { Component, OnInit } from '@angular/core';

import {Course} from '../models/course.model';
import {CourseService} from '../service/course.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  courses: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(data => {
      console.log(data);
      data["body"] = this.makeUppercaseTheFirstChar(data["body"]);
      this.courses = data["body"];
    });
  }

  public makeUppercaseTheFirstChar(body: object[]){
    for (var i = 0; i < body.length; i++) {
      let prettyString = body[i]["level"][0].toUpperCase() + body[i]["level"].slice(1).toLowerCase();
      console.log(prettyString);
      body[i]["level"] = prettyString;
    }
    return body;
  }

}
