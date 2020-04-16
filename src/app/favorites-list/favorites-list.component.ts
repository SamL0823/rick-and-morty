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
  selectedFavCharacter: Character = new Character();

  ngOnInit(){
  
  }

  // I need a function like this to take the selectedFavCharacter data from directory to character view
  addToFavorites(value: Character ) {
    this.incomingCharacter = value; 
    this.favCharacters.push(this.incomingCharacter);
    console.log(this.favCharacters);
  }
 
    
  onSelect(character: Character): void {
    if(this.selectedFavCharacter){
      this.selectedFavCharacter.selected = false;
    }
    this.selectedFavCharacter = character;
    console.log(this.selectedFavCharacter);
  }
  delete(){
    var a = this.favCharacters.findIndex(element => element.name === this.selectedFavCharacter.name);
    console.log(a);
    this.favCharacters.splice(a, 1);    
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
