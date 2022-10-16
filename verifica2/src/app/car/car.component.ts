import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() car : string;
  pars : string[]
  par : string;
  constructor() {
    this.car = ""
    this.par = ""
    this.pars = [' viti', ' bulloni', ' ferro']
   }

  ngOnInit(): void {
  }

}
