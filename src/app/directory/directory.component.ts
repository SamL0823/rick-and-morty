import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/character';
import { RmapiService } from 'src/app/rmapi.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  constructor(private _rmapiservice: RmapiService) { }
// tried making public here so i could use this variable in my pages directive
  public allData: any;
  public nextData: any;
  public prevData: any;
  public pageCounter = 1;
  mainBool=true;
  click= true;

  ngOnInit() {
    this._rmapiservice.getAllData().subscribe(data => {
      this.allData = data, error => console.log('Server error');
      // console.log(this.allData.info);   
    })
    
  }

  public selectedCharacter: Character = new Character();

  @Output() addBtnClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() characterSelected: EventEmitter<any> = new EventEmitter<any>();


  onSelect(character: Character): void {
    if(this.selectedCharacter){
      this.selectedCharacter.selected = false;
    }
    this.selectedCharacter = character;
    this.selectedCharacter.selected = true;
    console.log(this.selectedCharacter);
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

  sendSelectedCharacterToFavList() {
    this.addBtnClicked.emit(this.selectedCharacter);
    this.selectedCharacter.selected = false;
  }

  sendSelectedCharacterToCharView() {
    this.characterSelected.emit(this.selectedCharacter);
  }


 

}
