import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {Course} from '../models/course.model';
import {CourseService} from '../service/course.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  courses: Course[];

  constructor(private router: Router, private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(data => {
      console.log(data);
      let prettyData = data["body"];
      for (var i = 0; i < prettyData.length; i++) {
        let formattedLevel = prettyData[i]["level"][0].toUpperCase() + prettyData[i]["level"].slice(1).toLowerCase();
        prettyData[i]["level"] = formattedLevel;
      }
      this.courses = prettyData;
    });
  }

}
