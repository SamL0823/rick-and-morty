import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/character';
import { RmapiService } from 'src/app/rmapi.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  constructor(private _rmapiservice: RmapiService) { }

  allData: any;

  ngOnInit() {
    this._rmapiservice.getAllData().subscribe(data => {
      this.allData = data;
      console.log(this.allData);   
    })
    
  }

}
