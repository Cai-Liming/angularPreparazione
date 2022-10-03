import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-useruser-item',
  templateUrl: './useruser-item.component.html',
  styleUrls: ['./useruser-item.component.css']
})
export class UseruserItemComponent implements OnInit {
  name : string 
  constructor() {this.name = "felipe"; }

  ngOnInit(): void {
  }

}
