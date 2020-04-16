import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/character';
import { DirectoryComponent } from 'src/app/directory/directory.component';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})
export class FavoritesListComponent implements OnInit {
  favCharacters: Character[] = [];
  
  constructor() { }

  incomingCharacter: Character = new Character();

  ngOnInit(){
  
  }

  addToFavorites(value: Character ) {
    console.log(value);
    this.incomingCharacter = value; 
    console.log(this.incomingCharacter);
    this.favCharacters.push(this.incomingCharacter);
  }
 
    
  


  // onPrevClick(){
  //   this._rmapiservice.getPrevPage().subscribe(data => {
  //     this.prevData = data;
  //     this.mainBool= false;
  //     if(this.pageCounter !== 1){
  //       this.pageCounter = this.pageCounter - 1;
  //     }
  //     else{
  //       this.pageCounter = 25;
  //     }   
  //     console.log(this.prevData);
  //   })
  // }
}
