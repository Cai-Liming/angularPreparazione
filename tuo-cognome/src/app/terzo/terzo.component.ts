import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terzo',
  templateUrl: './terzo.component.html',
  styleUrls: ['./terzo.component.css']
})
export class TerzoComponent implements OnInit {
  name: string 
  constructor() {this.name  = "quarto"}

  ngOnInit(): void {
  }
  
}
