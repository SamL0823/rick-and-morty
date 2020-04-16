import { Component, OnInit } from '@angular/core';
import { SearchFormComponent } from '../search-form/search-form.component';
import { Character } from '../character';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {

  public currentCharacter: Character = new Character();


  constructor() { }

  ngOnInit(): void {
  }

  getCurrentCharacter(value: Character) {
    console.log(this.currentCharacter);
    this.currentCharacter = value;
  }

   // I need a function like this to take the selectedCharacter data from directory to character view
  //  addToFavorites(value: Character ) {
  //   this.incomingCharacter = value; 
  //   this.favCharacters.push(this.incomingCharacter);
  //   console.log(this.favCharacters);
  // }

}
