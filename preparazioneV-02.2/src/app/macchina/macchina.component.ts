import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-macchina',
  templateUrl: './macchina.component.html',
  styleUrls: ['./macchina.component.css']
})
export class MacchinaComponent implements OnInit {
  @Input() car : string; 
  parts : string[];
  part : string;
  constructor() { 
    this.car = ""
    this.parts = ['viti', "bulloni", "ferro"]
    this.part=""
  }

  ngOnInit(): void {
  }

}
