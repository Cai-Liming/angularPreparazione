import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  cars : string [];
  constructor() {
    this.cars =['1','2','3','4','5','6','7','8','9','10']
   }

  ngOnInit(): void {
  }

}
