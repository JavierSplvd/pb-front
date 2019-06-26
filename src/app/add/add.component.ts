import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {Course} from '../models/course.model';
import {CourseService} from '../service/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  course: Course = new Course();

  levels = [""];

  constructor(private router: Router, private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getLevels().subscribe(
      data => {
        this.levels = data["body"];
      }
    );
  }

  createUser(): void {
    this.courseService.createCourse(this.course).subscribe(
      data => {
        alert("New course added.")
      }
    );
  }

}
