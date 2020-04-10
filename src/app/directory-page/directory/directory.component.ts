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
// tried making public here so i could use this variable in my pages directive
  public allData: any;
  public nextData: any;
  public prevData: any;
  pageCounter = 1;
  mainBool=true;
  click= true;

  ngOnInit() {
    this._rmapiservice.getAllData().subscribe(data => {
      this.allData = data;
      // console.log(this.allData.info);   
    })
    
  }

  selectedCharacter: Character;
  onSelect(character: Character): void {
    this.selectedCharacter = character;
  }

  onNextClick(){
    this._rmapiservice.getNextPage().subscribe(data => {
      this.nextData = data;
      this.click = false;
      this.mainBool= true;
      if(this.pageCounter !== 25){
        this.pageCounter = this.pageCounter + 1;
      }
      else{
        this.pageCounter = 1;
      }     
      console.log(this.nextData);
    })
  }

  onPrevClick(){
    this._rmapiservice.getPrevPage().subscribe(data => {
      this.prevData = data;
      this.mainBool= false;
      if(this.pageCounter !== 1){
        this.pageCounter = this.pageCounter - 1;
      }
      else{
        this.pageCounter = 25;
      }   
      console.log(this.prevData);
    })
  }


}
