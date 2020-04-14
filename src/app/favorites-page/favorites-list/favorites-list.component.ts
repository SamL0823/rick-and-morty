import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/character';
import { DirectoryComponent } from 'src/app/directory/directory.component';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {
  favCharacters: Character[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
