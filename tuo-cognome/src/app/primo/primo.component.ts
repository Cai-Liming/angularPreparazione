import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.css']
})
export class PrimoComponent implements OnInit {
  name: string 
  constructor() {this.name = "secondo" }

  ngOnInit(): void {
  }

}
