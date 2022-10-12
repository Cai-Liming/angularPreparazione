import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-useruser-item',
  templateUrl: './useruser-item.component.html',
  styleUrls: ['./useruser-item.component.css']
})
export class UseruserItemComponent implements OnInit {
  @Input() name : string 
  constructor() {
    this.name = ""
  }

  ngOnInit(): void {
  }

}
