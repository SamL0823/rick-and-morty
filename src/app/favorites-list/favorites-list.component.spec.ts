import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectoryComponent } from 'src/app/directory/directory.component';
import { FavoritesListComponent } from './favorites-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Character } from '../character';

describe('FavoritesListComponent', () => {
  let component: FavoritesListComponent;
  let dComponent: DirectoryComponent;
  let fixture: ComponentFixture<FavoritesListComponent>;
  let directoryFixture: ComponentFixture<DirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesListComponent, DirectoryComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should show added character name in list when Add To Favorites button is clicked', () => {
    directoryFixture = TestBed.createComponent(DirectoryComponent);
    dComponent.ngOnInit();
    dComponent = directoryFixture.componentInstance;
    dComponent.selectedCharacter = {id: 1, name: "Rick Sanchez", status: '', species: "Human", type: "", gender: "Male", 
    origin: {}, location: {}, image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg", episode: [], url: '', created: '',
    selected: true
    };
    dComponent.sendSelectedCharacterToFavList();
    expect(component.favCharacters[0].name === "Rick Sanchez");
  })
});
