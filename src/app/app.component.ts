import { Component } from '@angular/core';
import { Character } from './character';
import { RmapiService } from './rmapi.service';
import { DerpPipe } from './derp.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = "rick-and-morty";


  constructor(private _rmapiservice: RmapiService) {
  }

  allData: any;

  ngOnInit() {
    this._rmapiservice.getAllData().subscribe(data => {
      this.allData = data;
      console.log(this.allData);   
    })

  }

  logCharacters(){
    console.log(this.allData);
  }

}
