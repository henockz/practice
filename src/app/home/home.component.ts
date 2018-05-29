import { Component, OnInit } from '@angular/core';
import {trigger, style,transition,animate,keyframes,query, stagger} from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  /*template:`HTML GOES HTERE` */
  styleUrls: ['./home.component.scss']
  /*styles: [``]*/
})
export class HomeComponent implements OnInit {

  partitionKey: number;
  email:string;
  url: string ="";
  constructor(private _data:DataService) { }
  
  ngOnInit() {
    
  }

}
