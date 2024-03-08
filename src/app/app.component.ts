import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceTsService } from './Service/service.ts.service';
import { CommonModule } from '@angular/common';


@Component({

  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  students:any = [];
  weather:any = [];
  temp:any = [];
  constructor(private studentService:ServiceTsService){}
  ngOnInit(): void {
    this.studentService.GetStudentData().subscribe(
      (data)=>{
        this.students = data.students;
      }
    );
    this.studentService.GetWeatherMap().subscribe(
      (data)=>{
        this.weather = data.weather;
        this.temp = data.main;
      }
    );
  }
}
