import { Component, OnInit } from '@angular/core';
import { DataService } from './content.services';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  countries = Array<any>();

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.countries = data;
    })  
  }

}


